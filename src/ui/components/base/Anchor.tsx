import { Link } from '@/ui/components/helpers/Link';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface IAnchor {
  href: string;
  className?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  ariaLabel?: string;
}

export const Anchor = ({
  href,
  children,
  className,
  target,
  ariaLabel,
}: PropsWithChildren<IAnchor>) => (
  <Link
    href={href}
    target={target}
    className={classNames(
      'group relative cursor-pointer text-lg leading-7 text-neutral-600 transition-all duration-100 ease-linear',
      'after:absolute after:-bottom-0.5 after:block after:h-px after:w-full after:bg-black after:opacity-0 after:duration-100 after:ease-linear',
      'hover:after:bottom-0 hover:after:opacity-100',
      className,
    )}
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);
