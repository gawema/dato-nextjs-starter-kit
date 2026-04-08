import { htmlToReact } from '@/lib/data/transformers/htmlToReact';
import { IImage } from '@/ui/types/commonTypes';
import classNames from 'classnames';
import Image from 'next/image';
import { Container } from '../../helpers/Container';
import { Copy } from '../../Typography/Copy/Copy';
import { H2 } from '../../Typography/Headings/Headings';

interface IProps {
  id?: string;
  bgColor?: 'white' | 'yellow';
  title?: string;
  text?: string;
  image?: IImage;
}

export const TextMedia = ({ id, title, text, image, bgColor = 'white' }: IProps) => {
  return (
    <section
      className={classNames('c-text-media py-12 xl:py-16', { 'bg-yellow': bgColor === 'yellow' })}
      id={id}
    >
      <Container size="2xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col justify-between">
            {title && <H2>{title}</H2>}
            {text && <Copy>{htmlToReact(text)}</Copy>}
          </div>
          <div className="hidden lg:block"></div>
          <div>
            {image && (
              <div className="aspect-portrait-mobile xl:aspect-portrait-desktop relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
