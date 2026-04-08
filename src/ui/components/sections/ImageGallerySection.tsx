import { SRCImage } from 'react-datocms';
import type { ImageProps } from '@/ui/types/commonTypes';

type Props = {
  images: Array<{
    id: string;
    image: ImageProps;
    caption?: string | null;
  }>;
};

export default function ImageGallerySection({ images }: Props) {
  return (
    <div className="u-gallery" data-datocms-content-link-boundary>
      <div>
        {images.map((asset) => (
          <figure key={asset.id} data-datocms-content-link-group>
            <SRCImage data={asset.image} imgStyle={{ width: 'auto' }} />
            {asset.caption && <figcaption>{asset.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
}
