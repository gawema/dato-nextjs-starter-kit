import { TagFragment } from '@/lib/datocms/commonFragments';
import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql, type ResultOf } from '@/lib/datocms/graphql';
import { cmsImageToImage } from '@/lib/data/transformers/cmsImageToImage';
import { cmsLinkToLink } from '@/lib/data/transformers/cmsLinkToLink';
import { cmsVideoToVideo } from '@/lib/data/transformers/cmsVideoToVideo';
import type { CmsPageModel, CmsSectionModel } from '@/lib/data/types/cms';

export const basicPageQuery = graphql(
  /* GraphQL */ `
    query BasicPageQuery($slug: String!) {
      page(filter: { slug: { eq: $slug } }) {
        _seoMetaTags {
          ...TagFragment
        }
        title
        _firstPublishedAt
        structuredText {
          value
          blocks {
            ... on RecordInterface {
              id
              __typename
            }
            ... on ImageBlockRecord {
              asset {
                title
                responsiveImage(sizes: "(max-width: 700px) 100vw, 700px") {
                  src
                  srcSet
                  width
                  height
                  alt
                  title
                  sizes
                }
              }
            }
            ... on ImageGalleryBlockRecord {
              assets {
                id
                title
                responsiveImage(imgixParams: { w: 300 }, sizes: "300px") {
                  src
                  srcSet
                  width
                  height
                  alt
                  title
                  sizes
                }
              }
            }
            ... on VideoBlockRecord {
              asset {
                title
                video {
                  muxPlaybackId
                  title
                  alt
                  width
                  height
                  blurUpThumb
                }
              }
            }
          }
          links {
            ... on RecordInterface {
              id
              __typename
            }
            ... on PageRecord {
              title
              slug
            }
          }
        }
      }
    }
  `,
  [TagFragment],
);

type BasicPageRecord = NonNullable<ResultOf<typeof basicPageQuery>['page']>;
type BasicPageSection = BasicPageRecord['structuredText']['blocks'][number];
type BasicPageLink = BasicPageRecord['structuredText']['links'][number];

export async function getBasicPageData(input: {
  slug: string;
  includeDrafts: boolean;
}): Promise<CmsPageModel | null> {
  const { page } = await executeQuery(basicPageQuery, {
    variables: { slug: input.slug },
    includeDrafts: input.includeDrafts,
    cacheTags: ['datocms:model:page', `datocms:slug:${input.slug}`],
  });

  if (!page) {
    return null;
  }

  return {
    title: page.title,
    firstPublishedAt: page._firstPublishedAt,
    structuredText: {
      value: page.structuredText.value as Record<string, unknown>,
      blocks: page.structuredText.blocks
        .map((block) => basicPageBlockToSection(block))
        .filter((block) => block !== null),
      links: page.structuredText.links
        .map((link) => basicPageLinkToLink(link))
        .filter((link) => link !== null),
    },
  };
}

export async function getBasicPageSeoMetaTags(input: { slug: string; includeDrafts: boolean }) {
  const { page } = await executeQuery(basicPageQuery, {
    variables: { slug: input.slug },
    includeDrafts: input.includeDrafts,
    cacheTags: ['datocms:model:page', `datocms:slug:${input.slug}`],
  });

  return page?._seoMetaTags ?? null;
}

function basicPageBlockToSection(block: BasicPageSection): CmsSectionModel | null {
  switch (block.__typename) {
    case 'ImageBlockRecord':
      return {
        id: block.id,
        sectionType: 'image',
        __typename: 'ImageBlockRecord',
        image: cmsImageToImage(block.asset.responsiveImage),
        caption: block.asset.title,
      };
    case 'ImageGalleryBlockRecord':
      return {
        id: block.id,
        sectionType: 'imageGallery',
        __typename: 'ImageGalleryBlockRecord',
        images: block.assets.map((asset) => ({
          id: asset.id,
          image: cmsImageToImage(asset.responsiveImage),
          caption: asset.title,
        })),
      };
    case 'VideoBlockRecord':
      return {
        id: block.id,
        sectionType: 'video',
        __typename: 'VideoBlockRecord',
        video: cmsVideoToVideo(block.asset.video),
        caption: block.asset.title,
      };
    default:
      return null;
  }
}

function basicPageLinkToLink(link: BasicPageLink) {
  if (link.__typename !== 'PageRecord') {
    return null;
  }

  return cmsLinkToLink(link);
}
