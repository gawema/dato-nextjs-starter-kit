'use client';

import { htmlToReact } from '@/lib/data/transformers/htmlToReact';
import { IImage, ILink } from '@/ui/types/commonTypes';
import Image from 'next/image';
import { useState } from 'react';
import { IoChevronForward, IoClose } from 'react-icons/io5';
import { Link } from '../../helpers/Link';
import { Copy } from '../../Typography/Copy/Copy';

interface IProps {
  image?: IImage;
  callout?: {
    text: string;
    link?: ILink;
  };
}

export const Hero = ({ image, callout }: IProps) => {
  const [showCallout, setShowCallout] = useState(true);

  if (!image) {
    return null;
  }

  return (
    <section className="c-hero relative">
      <div className="aspect-hero-mobile md:aspect-hero-desktop relative">
        <Image src={image.src} alt={image.alt} fill className="object-cover object-center" />
      </div>
      {showCallout && callout && (
        <div className="bg-primary rounded-small absolute top-8 left-1/2 w-[90vw] max-w-[850px] -translate-x-1/2 overflow-hidden py-4 pr-12 pl-6">
          <Copy size="small">
            {htmlToReact(callout.text)}
            {callout.link && (
              <Link
                className="group inline-flex flex-wrap items-center gap-1 font-bold"
                href={callout.link.href}
              >
                {callout.link.title}
                <IoChevronForward className="mt-0.5 duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            )}
          </Copy>
          <button
            className="absolute top-2 right-2 cursor-pointer p-1"
            onClick={() => {
              setShowCallout(false);
            }}
          >
            <IoClose className="text-xl" />
          </button>
        </div>
      )}
    </section>
  );
};
