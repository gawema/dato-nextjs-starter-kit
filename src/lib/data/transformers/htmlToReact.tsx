import { Anchor } from '@/ui/components/base/Anchor';
import { Copy } from '@/ui/components/Typography/Copy/Copy';
import { H1, H2, H3 } from '@/ui/components/Typography/Headings/Headings';
import classNames from 'classnames';
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
  attributesToProps,
  domToReact,
} from 'html-react-parser';
import Script from 'next/script';
import { JSX, type ReactNode } from 'react';

const options = (additionalOptions?: IAdditionalOptions): HTMLReactParserOptions => ({
  replace: (domNode) => {
    if (!(domNode instanceof Element)) {
      return domNode;
    }

    const children = domToReact(domNode.children as DOMNode[], options(additionalOptions));
    const attribsAsProps = attributesToProps(domNode.attribs);

    switch (domNode.name) {
      case 'h1':
        return <H1 className={classNames(attribsAsProps.className)}>{children}</H1>;
      case 'h2':
        return <H2 className={classNames(attribsAsProps.className)}>{children}</H2>;
      case 'h3':
        return <H3 className={classNames(attribsAsProps.className)}>{children}</H3>;

      case 'a': {
        if (attribsAsProps.href && typeof attribsAsProps.href === 'string') {
          return (
            <Anchor
              {...attribsAsProps}
              className={classNames(attribsAsProps.className, additionalOptions?.anchorClass)}
              href={attribsAsProps.href}
            >
              {children}
            </Anchor>
          );
        }
        break;
      }

      case 'p':
        return (
          <Copy
            as="p"
            size="inherit"
            {...attribsAsProps}
            className={classNames(attribsAsProps.className, 'mb-6 last:mb-0')}
          >
            {children}
          </Copy>
        );
      case 'strong':
      case 'b':
        return (
          <Copy
            as="strong"
            {...attribsAsProps}
            className={classNames('inline font-bold empty:hidden', attribsAsProps.className)}
          >
            {children}
          </Copy>
        );
      case 'i':
      case 'em':
        return (
          <Copy
            as="em"
            {...attribsAsProps}
            className={classNames('inline italic empty:hidden', attribsAsProps.className)}
          >
            {children}
          </Copy>
        );
      case 'script':
        return <Script {...attribsAsProps} />;

      default: {
        const DomNode = domNode.tagName as keyof JSX.IntrinsicElements;
        return <DomNode {...attribsAsProps}>{children as ReactNode}</DomNode>;
      }
    }

    return undefined;
  },
});

interface IAdditionalOptions {
  anchorClass?: string;
}

export const htmlToReact = (html: string, additionalOptions?: IAdditionalOptions) =>
  parse(html, options(additionalOptions));
