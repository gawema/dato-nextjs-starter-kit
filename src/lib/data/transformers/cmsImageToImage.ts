import type { CmsImageModel } from '@/lib/data/types/cms';

type DatoResponsiveImage = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt?: string | null;
  title?: string | null;
  sizes?: string | null;
};

export function cmsImageToImage(image: DatoResponsiveImage): CmsImageModel {
  return {
    src: image.src,
    srcSet: image.srcSet,
    width: image.width,
    height: image.height,
    alt: image.alt ?? null,
    title: image.title ?? null,
    sizes: image.sizes ?? null,
  };
}
