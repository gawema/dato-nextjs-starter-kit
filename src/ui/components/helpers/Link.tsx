import NextLink from 'next/link';
import { ComponentProps, forwardRef } from 'react';

export const Link = forwardRef<HTMLAnchorElement, ComponentProps<typeof NextLink>>((props, ref) => {
  const { href } = props;

  return <NextLink ref={ref} {...props} href={href} />;
});
