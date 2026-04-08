import type { CmsVideoModel } from '@/lib/data/types/cms';

type DatoVideo = {
  muxPlaybackId: string;
  title?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
  blurUpThumb?: string | null;
};

export function cmsVideoToVideo(video: DatoVideo): CmsVideoModel {
  return {
    muxPlaybackId: video.muxPlaybackId,
    title: video.title ?? null,
    alt: video.alt ?? null,
    width: video.width ?? null,
    height: video.height ?? null,
    blurUpThumb: video.blurUpThumb ?? null,
  };
}
