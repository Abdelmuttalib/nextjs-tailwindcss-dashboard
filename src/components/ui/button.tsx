import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import cn from '@/lib/cn';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center rounded-full font-medium border-2 border-transparent transition-colors focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none',
  {
    variants: {
      variant: {
        default:
          'text-white bg-primary dark:bg-primary/80 hover:bg-primary-600 focus:border-primary-200 dark:focus:border-primary-300 focus:bg-primary',
        primary:
          'text-white bg-primary dark:bg-primary/80 hover:bg-primary-600 focus:border-primary-200 dark:focus:border-primary-300 focus:bg-primary',
        outline:
          'text-gray-900 bg-white border-gray-200/100 hover:bg-gray-50 focus:border-primary',
        secondary:
          'text-gray-900 dark:text-gray-200 bg-gray-100/70 dark:bg-gray-800/50 dark:hover:bg-gray-800/60 dark:border-gray-700 hover:bg-gray-100 focus:bg-gray-100/70 dark:focus:bg-gray-800/70',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        'destructive-outline':
          'border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:border-2 focus:border-red-200 focus:text-white dark:text-red-400 dark:border-red-400 dark:hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:border-red-400 dark:focus:text-white',
        dark: 'bg-gray-900 text-white duration-150 ease-linear hover:bg-gray-900/90 active:bg-gray-700 disabled:bg-gray-700 focus:border-primary-300',
      },
      size: {
        default: 'label-md px-5 py-2.5',
        sm: 'label-sm px-4 py-2',
        md: 'label-sm px-5 py-2.5',
        lg: 'label-md px-5 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
          {
            isLoading:
              'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          }
        )}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <div
            className={cn(
              'absolute top-0 left-0 right-0 bottom-0 cursor-wait rounded-full bg-gray-900 transition-none hover:text-transparent disabled:cursor-wait'
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
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
