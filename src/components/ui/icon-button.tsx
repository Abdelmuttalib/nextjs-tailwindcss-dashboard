import { cva, VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import React from 'react';

import cn from '@/lib/cn';

const iconButtonVariants = cva(
  'cursor-pointer border-2 border-transparent transition duration-200 outline-transparent focus:outline-transparent whitespace-nowrap rounded-full inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default:
          'text-white bg-primary hover:bg-primary-600 focus:border-primary-200 focus:bg-primary',
        outline:
          'text-gray-900 bg-white border-gray-200/100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-50 focus:border-primary',
        secondary:
          'text-gray-900 bg-gray-100/70 hover:bg-gray-100 focus:bg-gray-100/70',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
      },
      size: {
        default: 'label-md p-3',
        xs: 'label-sm w-fit h-fit p-1.5',
        sm: 'label-sm w-fit h-fit p-2',
        md: 'label-md w-fit h-fit p-3',
        lg: 'label-md w-fit h-fit p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface IconButtonProps
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
