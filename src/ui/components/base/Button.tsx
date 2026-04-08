import { Link } from '@/ui/components/helpers/Link';
import classNames from 'classnames';
import React, { ComponentPropsWithRef } from 'react';
import { PiSpinnerGap } from 'react-icons/pi';

export type IButtonVariant = 'primary' | 'black' | 'outline';

export interface IButton {
  label: string;
  href?: string;
  className?: string;
  target?: string;
  variant?: IButtonVariant;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
  ariaLabel?: string;
  useStandardAnchorTag?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ComponentPropsWithRef<'button'> & IButton
>(
  (
    {
      label,
      href,
      className,
      target,
      variant = 'primary',
      onClick,
      type,
      isLoading = false,
      ariaLabel,
      useStandardAnchorTag = false,
      disabled,
      tabIndex,
    }: IButton,
    forwardedRef,
  ) => {
    const buttonClasses = classNames(
      'inline-flex relative group items-center justify-center',
      'w-full p-4 md:w-auto',
      'uppercase leading-none font-sans text-base font-semibold',
      'transition-all duration-150 ease-linear',
      {
        'border border-primary text-black bg-primary hover:bg-black hover:border-black hover:text-primary':
          variant === 'primary',
      },
      {
        'border border-black text-white bg-black hover:text-primary': variant === 'black',
      },
      {
        'border border-black bg-white hover:bg-primary hover:border-primary hover:text-black':
          variant === 'outline',
      },
      className,
    );

    return (
      <>
        {href ? (
          useStandardAnchorTag ? (
            <a
              href={href}
              target={target}
              className={buttonClasses}
              aria-label={ariaLabel}
              ref={forwardedRef as React.ForwardedRef<HTMLAnchorElement>}
            >
              {label}
            </a>
          ) : (
            <Link
              href={href}
              target={target}
              className={buttonClasses}
              onClick={onClick}
              aria-label={ariaLabel}
              ref={forwardedRef as React.ForwardedRef<HTMLAnchorElement>}
            >
              <span className="relative">{label}</span>
            </Link>
          )
        ) : (
          <button
            className={classNames(buttonClasses, {
              'pointer-events-none opacity-30': isLoading || disabled,
            })}
            disabled={isLoading || disabled}
            onClick={onClick}
            type={type}
            aria-label={ariaLabel}
            ref={forwardedRef as React.ForwardedRef<HTMLButtonElement>}
            tabIndex={tabIndex}
          >
            <span className="relative flex items-center justify-center gap-4">
              {label} {isLoading && <PiSpinnerGap className="animate-spin" />}
            </span>
          </button>
        )}
      </>
    );
  },
);
