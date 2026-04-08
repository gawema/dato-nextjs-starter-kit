'use client';

import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from '../helpers/Link';

gsap.registerPlugin(ScrollToPlugin);

export interface IScrollLink {
  id: string;
  url: string;
  label: string;
  postClickHandler?: () => void;
  additionalClasses?: string;
}

type IHeaderLinkWithoutId = Omit<IScrollLink, 'id'>;

export const ScrollLink = ({
  url,
  label,
  postClickHandler,
  additionalClasses,
}: IHeaderLinkWithoutId) => {
  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!url.startsWith('#')) {
      return;
    }

    e.preventDefault();
    gsap.to(window, {
      scrollTo: { y: url, offsetY: 100 },
      ease: 'power3.inOut',
      duration: 1.2,
    });

    postClickHandler?.();
  };

  return (
    <Link
      className={classNames(
        'relative block cursor-pointer py-2 text-lg leading-7 text-neutral-600',
        'after:absolute after:bottom-1.5 after:block after:h-px after:w-full after:bg-black after:opacity-0 after:duration-100 after:ease-linear',
        'hover:after:bottom-2 hover:after:opacity-100',
        additionalClasses,
      )}
      href={url}
      onClick={clickHandler}
    >
      {label}
    </Link>
  );
};
