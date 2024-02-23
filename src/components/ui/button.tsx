import { cva, VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import cn from '@/lib/cn';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center w-full text-sm sm:w-auto rounded font-medium border-0 transition-colors transition duration-150 ease-linear focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-60 disabled:hover:opacity-60 disabled:cursor-not-allowed disabled:shadow-none ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset outline-none focus:outline-none',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-primary shadow-sm dark:bg-primary hover:bg-primary-600 focus:ring-primary-200 dark:focus:ring-primary-300 active:bg-primary focus:bg-primary',
        'primary-outline':
          'text-primary bg-background ring-primary-400 hover:bg-primary-100/40 dark:hover:bg-layer-3 focus:ring-primary',
        outline:
          'text-foreground bg-background ring-border hover:bg-layer-2 focus:ring-primary',
        secondary:
          'text-primary-800 dark:text-gray-200 bg-primary-100/50 hover:bg-primary-100/70 focus:bg-primary-100/80 dark:bg-gray-800/50 dark:hover:bg-gray-800/60 dark:ring-gray-700  dark:focus:bg-gray-800/70',
        destructive:
          'bg-error text-white hover:bg-red-600 dark:hover:bg-red-600',
        'destructive-outline':
          'ring-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:ring-red-200 focus:text-white dark:text-red-400 dark:ring-red-400 dark:hover:ring-red-500 dark:hover:bg-error dark:hover:text-white dark:focus:bg-red-500 dark:focus:ring-red-400 dark:focus:text-white',
        dark: 'bg-gray-900 text-white duration-150 ease-linear hover:bg-gray-900/90 active:bg-gray-700 disabled:bg-gray-700 focus:ring-primary-300',
        ghost:
          'hover:bg-gray-hover dark:hover:bg-layer-2 text-foreground-light',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-4 py-2.5',
        xs: 'px-2.5 py-1',
        sm: 'px-3 py-1.5',
        lg: 'px-5 py-3.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, children, iconLeft, iconRight, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
          // {
          //   isLoading:
          //     'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          // },
          {
            'gap-x-1.5': iconLeft || iconRight,
          }
        )}
        ref={ref}
        {...props}
      >
        {/* {isLoading && (
          <div
            className={cn(
              'absolute top-0 left-0 right-0 bottom-0 cursor-wait rounded-full transition-none hover:text-transparent disabled:cursor-wait'
            )}
          >
            <div
              className={cn(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              )}
            >
              <ImSpinner2 className='h-5 w-5 animate-spin text-primary-300' />
            </div>
          </div>
        )} */}
        {iconLeft ? <>{iconLeft}</> : null}
        {children}
        {iconRight ? <>{iconRight}</> : null}
      </button>
    );
  }
);
Button.displayName = 'Button';

export interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, leftIcon, rightIcon, size, ...props }, ref) => {
    return (
      <Link
        className={cn(buttonVariants({ variant, size, className }), {
          'inline-flex items-center justify-center gap-x-2':
            leftIcon || rightIcon,
        })}
        ref={ref}
        {...props}
      >
        {leftIcon ? <>{leftIcon}</> : null}
        {props.children}
        {rightIcon ? <>{rightIcon}</> : null}
      </Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export { Button, ButtonLink, buttonVariants };
