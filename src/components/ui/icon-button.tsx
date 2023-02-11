import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

import cn from '@/lib/cn';

import { UnstyledLink } from '@/components/links';
import { Button } from '@/components/ui/button';

const iconButtonVariants = cva(
  'cursor-pointer border-2 border-transparent transition duration-200 focus:outline-none whitespace-nowrap rounded-full flex items-center justify-center',
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
        default: 'label-md w-fit h-fit p-3',
        xs: 'label-sm w-fit h-fit p-1',
        sm: 'label-sm w-fit h-fit p-1.5',
        lg: 'label-md w-fit h-fit p-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  className?: string;
  children: React.ReactNode;
  href?: string;
  linkNewTab?: boolean;
}

const IconButtonOrLink = ({
  className,
  variant,
  size,
  children,
  href,
  linkNewTab,
  ...props
}: IconButtonProps) => {
  if (href) {
    return (
      <UnstyledLink
        href={href}
        {...(linkNewTab
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className={cn(iconButtonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </UnstyledLink>
    );
  }

  return (
    <Button
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    ></Button>
  );
};

export default IconButtonOrLink;
