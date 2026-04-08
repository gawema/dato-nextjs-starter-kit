import HeadingWithAnchorLink from '@/components/HeadingWithAnchorLink';
import type { CmsLinkModel, CmsSectionModel, CmsStructuredTextModel } from '@/lib/data/types/cms';
import { getComponentFromSection } from '@/ui/components/sections/getComponentFromSection';
import { isCode, isHeading } from 'datocms-structured-text-utils';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { StructuredText, renderNodeRule } from 'react-datocms';

const Code = dynamic(() => import('@/components/Code'));

type Props = {
  data: CmsStructuredTextModel;
  pageBasePath: string;
};

export default function CmsStructuredText({ data, pageBasePath }: Props) {
  return (
    <div data-datocms-content-link-group>
      <StructuredText
        data={data as never}
        customNodeRules={[
          renderNodeRule(isCode, ({ node, key }) => <Code key={key} node={node} />),
          renderNodeRule(isHeading, ({ node, key, children }) => (
            <HeadingWithAnchorLink node={node} key={key}>
              {children}
            </HeadingWithAnchorLink>
          )),
        ]}
        renderBlock={({ record }) => {
          return getComponentFromSection(record as CmsSectionModel);
        }}
        renderInlineRecord={({ record }) => {
          const link = record as CmsLinkModel;
          if (link.linkType === 'page') {
            return (
              <Link
                href={`${pageBasePath}/${link.slug}`}
                className="u-pill"
                data-datocms-content-link-boundary
              >
                {link.title}
              </Link>
            );
          }

          return null;
        }}
        renderLinkToRecord={({ transformedMeta, record, children }) => {
          const link = record as CmsLinkModel;
          if (link.linkType === 'page') {
            return (
              <Link {...transformedMeta} href={`${pageBasePath}/${link.slug}`}>
                {children as ReactNode}
              </Link>
            );
          }

          return null;
        }}
      />
    </div>
  );
}
