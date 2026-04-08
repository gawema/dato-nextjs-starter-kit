import { VideoPlayer } from 'react-datocms';
import type { VideoProps } from '@/ui/types/commonTypes';

type Props = {
  video: VideoProps;
  caption?: string | null;
};

export default function VideoSection({ video, caption }: Props) {
  return (
    <figure data-datocms-content-link-group>
      <VideoPlayer data={video} accentColor="var(--bg-accent)" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
