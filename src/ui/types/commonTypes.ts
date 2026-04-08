export type ImageProps = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt?: string | null;
  title?: string | null;
  sizes?: string | null;
};

export type VideoProps = {
  muxPlaybackId: string;
  title?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
  blurUpThumb?: string | null;
};

export interface ILink {
  title: string;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
}

export type THeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IImage {
  id: number;
  src: string;
  alt: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface IImageLink extends IImage {
  linkUrl: string;
  linkTarget?: '_self' | '_blank' | '_parent' | '_top';
}
