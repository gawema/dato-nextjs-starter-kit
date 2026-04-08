import { PropsWithChildren } from 'react';

interface IProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'fluid';
  className?: string;
}

export const Container = ({
  children,
  size = '2xl',
  className = '',
}: PropsWithChildren<IProps>) => {
  const sizeClassMap = {
    sm: 'max-w-screen-sm px-4',
    md: 'max-w-screen-md px-4 xl:px-6',
    lg: 'max-w-screen-lg px-4 xl:px-6',
    xl: 'max-w-screen-xl px-4 xl:px-6',
    '2xl': 'max-w-screen-2xl px-4 xl:px-6',
    '3xl': 'max-w-screen-3xl px-4 xl:px-6',
    fluid: 'max-w-none px-4 xl:px-6',
  };

  return <div className={`mx-auto ${sizeClassMap[size]} ${className}`}>{children}</div>;
};
