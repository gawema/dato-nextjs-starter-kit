import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface ICopyProps {
  size?: 'small' | 'medium' | 'large' | 'inherit';
  className?: string;
  as?: 'div' | 'p' | 'strong' | 'em';
}

export const Copy = ({
  children,
  size = 'medium',
  className,
  as = 'div',
}: PropsWithChildren<ICopyProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'text-pretty',
        {
          'text-2xl leading-8': size === 'large',
          'text-base leading-6': size === 'medium',
          'text-sm': size === 'small',
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
};
