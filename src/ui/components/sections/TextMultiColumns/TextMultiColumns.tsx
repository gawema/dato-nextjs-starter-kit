import { htmlToReact } from '@/lib/data/transformers/htmlToReact';
import { ILink, THeadings } from '@/ui/types/commonTypes';
import classNames from 'classnames';
import { Link } from '../../helpers/Link';
import { Container } from '../../helpers/Container';
import { Copy } from '../../Typography/Copy/Copy';
import { H2 } from '../../Typography/Headings/Headings';

interface IProps {
  id?: string;
  title?: string;
  titleLayout?: number;
  subtitle?: string;
  link?: ILink;
  text1?: string;
  text2?: string;
  columns: 2 | 3;
}

export const TextMultiColumns = ({
  id,
  title,
  titleLayout,
  subtitle,
  link,
  text1,
  text2,
  columns,
}: IProps) => {
  const titleTagMap: Record<1 | 2 | 3 | 4 | 5 | 6, THeadings> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  };

  const titleTag =
    titleLayout && [1, 2, 3, 4, 5, 6].includes(titleLayout)
      ? titleTagMap[titleLayout as 1 | 2 | 3 | 4 | 5 | 6]
      : 'h2';

  return (
    <section className="c-text-multi-column py-6 xl:py-12" id={id}>
      <Container size="2xl">
        <div className="grid grid-cols-12 gap-6">
          <div
            className={classNames('flex flex-col gap-y-4', {
              'col-span-full md:mb-7 lg:col-span-4 xl:mb-0': columns === 3,
              'col-span-full text-center md:mb-7': columns !== 3,
            })}
          >
            {title && <H2 as={titleTag}>{title}</H2>}
            {subtitle && <Copy className="font-bold lg:text-lg">{subtitle}</Copy>}
          </div>
          <div
            className={classNames('rte-wrapper col-span-full text-neutral-600', {
              'lg:col-span-4': columns === 3,
              'lg:col-span-6': columns !== 3,
            })}
          >
            {text1 && <Copy>{htmlToReact(text1)}</Copy>}
          </div>
          <div
            className={classNames('col-span-full text-neutral-600', {
              'lg:col-span-4': columns === 3,
              'lg:col-span-6': columns !== 3,
            })}
          >
            {text2 && <Copy>{htmlToReact(text2)}</Copy>}

            {link && (
              <Link className="mt-6 block" href={link.href || ''} target={link.target}>
                {link.title}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
