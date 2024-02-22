import { cva, VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import React from 'react';

import cn from '@/lib/cn';

export const iconButtonVariants = cva(
  'cursor-pointer border-0 border-transparent ring-1 ring-inset ring-transparent transition duration-150 ease-linear outline-transparent focus:outline-transparent whitespace-nowrap rounded inline-flex items-center justify-center focus:ring-2 focus:ring-inset',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-primary hover:bg-primary-600 focus:ring-primary-200 focus:bg-primary',
        'primary-outline':
          'text-primary bg-background ring-primary-400 hover:bg-primary-100/40 focus:ring-primary',
        outline:
          'text-foreground bg-background ring-border hover:bg-primary-100/30 focus:ring-primary',
        secondary:
          'text-primary-800 dark:text-gray-200 bg-primary-100/50 hover:bg-primary-100/70 focus:bg-primary-100/80 dark:bg-gray-800/50 dark:hover:bg-gray-800/60 dark:ring-gray-700  dark:focus:bg-gray-800/70',
        dark: 'bg-gray-900 text-white hover:bg-gray-900/90 active:bg-gray-700 disabled:bg-gray-700 focus:ring-primary-300',
        // outline:
        //   'text-gray-900 bg-white ring-border dark:ring-gray-800 dark:bg-background dark:text-gray-200 hover:bg-gray-50 focus:ring-primary dark:ring-border',
        // secondary:
        //   'text-gray-900 bg-gray-100/70 dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-100 focus:bg-gray-100/70',
        destructive:
          'bg-error text-white hover:bg-red-600 dark:hover:bg-red-600',
        'destructive-outline':
          'bg-background text-error ring-error hover:bg-error/10 dark:hover:bg-error hover:text-white',
        'primary-ghost': 'hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-gray-hover focus:bg-hover',
      },
      size: {
        default: 'w-11 h-11',
        xs: 'w-9 h-9',
        sm: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  className?: string;
}

export const IconButton = ({
  className,
  variant,
  size,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

interface IconLinkProps
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof iconButtonVariants> {
  className?: string;
  children: React.ReactNode;
  href: string;
  newTab?: boolean;
}

export const IconLink = ({
  className,
  variant,
  href,
  size,
  children,
  newTab,
  ...props
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </Link>
  );
};
