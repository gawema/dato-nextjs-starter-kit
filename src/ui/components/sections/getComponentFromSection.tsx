import type { CmsSectionModel } from '@/lib/data/types/cms';
import type { ReactElement } from 'react';
import ImageGallerySection from '@/ui/components/sections/ImageGallerySection';
import ImageSection from '@/ui/components/sections/ImageSection';
import VideoSection from '@/ui/components/sections/VideoSection';

export function getComponentFromSection(section: CmsSectionModel): ReactElement | null {
  switch (section.sectionType) {
    case 'image':
      return <ImageSection image={section.image} caption={section.caption} />;
    case 'imageGallery':
      return <ImageGallerySection images={section.images} />;
    case 'video':
      return <VideoSection video={section.video} caption={section.caption} />;
    default:
      return null;
  }
}
