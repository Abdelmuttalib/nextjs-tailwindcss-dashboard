import { cva } from 'class-variance-authority';
import React from 'react';

import cn from '@/lib/cn';

// label-sm md:label-md w-full flex-1 rounded-md border-[2px] border-gray-300 bg-white bg-transparent px-3 py-2 text-gray-800 placeholder-gray-400 outline-none transition duration-200 hover:bg-gray-50 focus:border-primary focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800/50 dark:focus:border-primary-400 focus:dark:bg-gray-800/70 md:px-5 md:py-3

const inputVariants = cva(
  'relative text-sm border-0 transition-colors focus:outline-transparent transition duration-200 disabled:pointer-events-none disabled:opacity-60 disabled:hover:opacity-60 disabled:cursor-not-allowed disabled:shadow-none ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset outline-none focus:outline-none w-full font-medium rounded-md focus:outline-transparent focus:ring-2 focus:ring-inset focus:outline-none disabled:bg-background-muted/30 disabled:hover:disabled:bg-background-muted/30 disabled:text-foreground-muted disabled:placeholder:text-foreground-muted',
  {
    variants: {
      variant: {
        default:
          'ring-1 ring-inset shadow-sm ring-border text-sm bg-layer px-3 py-2 text-foreground placeholder-foreground-muted outline-none hover:bg-gray-50 focus:ring-primary focus:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:focus:ring-primary-400 focus:dark:bg-gray-800/70',
        transparent:
          'text-sm bg-transparent text-foreground placeholder-foreground-muted hover:bg-layer focus:ring-transparent',
      },
      size: {
        default: 'px-3 py-2 md:px-4 md:py-2.5',
        lg: 'text-base md:px-4 md:py-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: 'default' | 'lg';
  variant?: 'default' | 'transparent';
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        className={cn(
          // 'text-base font-medium w-full flex-1 rounded-md border shadow-sm border-border bg-background px-3 py-2 text-foreground placeholder-foreground-muted outline-none transition duration-200 hover:bg-gray-50 focus:border-primary focus:bg-white focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800/50 dark:focus:border-primary-400 focus:dark:bg-gray-800/70 md:px-4 md:py-2.5',
          // 'font-medium w-full flex-1 rounded-md border-0 ring-1 ring-inset shadow-sm ring-border text-sm bg-layer px-3 py-2 text-foreground placeholder-foreground-muted outline-none transition duration-200 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-primary focus:bg-white focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800/50 dark:focus:ring-primary-400 focus:dark:bg-gray-800/70 md:px-4 md:py-2.5',
          // disabled
          // 'flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
          inputVariants({ variant, size, ...props }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
