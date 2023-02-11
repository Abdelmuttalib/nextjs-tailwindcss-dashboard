import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import cn from '@/lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium border-2 border-transparent transition-colors focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none',
  {
    variants: {
      variant: {
        default:
          'text-white bg-primary hover:bg-primary-600 focus:border-primary-200 focus:bg-primary',
        outline:
          'text-gray-900 bg-white border-gray-200/100 hover:bg-gray-50 focus:border-primary',
        secondary:
          'text-gray-900 bg-gray-100/70 hover:bg-gray-100 focus:bg-gray-100/70',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
      },
      size: {
        default: 'label-md px-4 py-2 sm:px-5',
        sm: 'label-sm px-4 py-2',
        lg: 'label-md p-1',
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
