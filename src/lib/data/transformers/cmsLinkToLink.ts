import type { CmsLinkModel } from '@/lib/data/types/cms';

type DatoPageLink = {
  id: string;
  __typename: 'PageRecord';
  title: string;
  slug: string;
};

export function cmsLinkToLink(link: DatoPageLink): CmsLinkModel {
  return {
    id: link.id,
    linkType: 'page',
    __typename: 'PageRecord',
    title: link.title,
    slug: link.slug,
  };
}
