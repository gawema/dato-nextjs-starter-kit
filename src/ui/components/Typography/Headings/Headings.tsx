import type { THeadings } from '@/ui/types/commonTypes';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface IProps {
  className?: string;
  as?: THeadings | 'p' | 'div';
}

const headingsCommonClasses = 'text-pretty font-bold mb-4 font-secondary';

export const HDisplay = ({ children, className, as = 'h1' }: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'text-[44px] leading-11 tracking-[-1px] xl:text-8xl xl:leading-24 xl:tracking-[-2px]',
        headingsCommonClasses,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export const H1 = ({ children, className, as = 'h1' }: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag className={classNames('text-4xl xl:text-[64px]', headingsCommonClasses, className)}>
      {children}
    </Tag>
  );
};

export const H2 = ({ children, className, as = 'h2' }: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'text-[32px] leading-[35px] xl:text-5xl xl:leading-[52px]',
        headingsCommonClasses,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export const H3 = ({ children, className, as = 'h3' }: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag className={classNames('text-[28px] xl:text-4xl', headingsCommonClasses, className)}>
      {children}
    </Tag>
  );
};

export const H4 = ({ children, className, as = 'h4' }: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag className={classNames('text-[22px] xl:text-2xl', headingsCommonClasses, className)}>
      {children}
    </Tag>
  );
};

export const H5 = ({ children, className, as = 'h5' }: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'text-[20px] leading-6 xl:text-[22px] xl:leading-[26px]',
        headingsCommonClasses,
        className,
      )}
    >
      {children}
    </Tag>
  );
};
