export type CmsImageModel = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt?: string | null;
  title?: string | null;
  sizes?: string | null;
};

export type CmsVideoModel = {
  muxPlaybackId: string;
  title?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
  blurUpThumb?: string | null;
};

export type CmsLinkModel = {
  id: string;
  linkType: 'page';
  __typename: 'PageRecord';
  title: string;
  slug: string;
};

export type CmsImageSectionModel = {
  id: string;
  sectionType: 'image';
  __typename: 'ImageBlockRecord';
  image: CmsImageModel;
  caption?: string | null;
};

export type CmsImageGallerySectionModel = {
  id: string;
  sectionType: 'imageGallery';
  __typename: 'ImageGalleryBlockRecord';
  images: Array<{
    id: string;
    image: CmsImageModel;
    caption?: string | null;
  }>;
};

export type CmsVideoSectionModel = {
  id: string;
  sectionType: 'video';
  __typename: 'VideoBlockRecord';
  video: CmsVideoModel;
  caption?: string | null;
};

export type CmsSectionModel =
  | CmsImageSectionModel
  | CmsImageGallerySectionModel
  | CmsVideoSectionModel;

export type CmsStructuredTextModel = {
  value: Record<string, unknown>;
  blocks: CmsSectionModel[];
  links: CmsLinkModel[];
};

export type CmsPageModel = {
  title: string;
  firstPublishedAt: string | null;
  structuredText: CmsStructuredTextModel;
};

export type CmsSiteSettingsModel = {
  siteName: string;
  primaryLinks: Array<{
    label: string;
    href: string;
  }>;
};

export interface ICmsSettings {
  locallang: {
    contact_menu?: string;
  };
}
