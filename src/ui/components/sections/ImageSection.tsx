import { SRCImage } from 'react-datocms';
import type { ImageProps } from '@/ui/types/commonTypes';

type Props = {
  image: ImageProps;
  caption?: string | null;
};

export default function ImageSection({ image, caption }: Props) {
  return (
    <figure data-datocms-content-link-group>
      <SRCImage data={image} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
