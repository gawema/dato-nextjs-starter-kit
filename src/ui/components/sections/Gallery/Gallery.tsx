'use client';

import { IImage } from '@/ui/types/commonTypes';
import classNames from 'classnames';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface IProps {
  id?: string;
  images: IImage[];
}

export const Gallery = ({ id, images }: IProps) => {
  return (
    <section className="c-gallery py-12 xl:py-16" id={id}>
      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        modules={[Autoplay]}
        autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={`swiper-${item.id}`}
            className={classNames(
              '!w-[80vw]',
              { 'max-w-[530px] md:!w-[36vw]': index % 2 === 0 },
              { 'max-w-[420px] md:!w-[29vw]': index % 2 !== 0 },
            )}
          >
            <div
              className={classNames(
                'relative',
                { 'aspect-portrait-gallery': index % 2 === 0 },
                { 'aspect-square': index % 2 !== 0 },
              )}
            >
              <Image src={item.src} alt={item.alt} fill className="object-cover object-center" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
