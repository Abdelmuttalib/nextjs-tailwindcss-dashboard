import React from 'react';

import cn from '@/lib/cn';

import Typography from '@/components/ui/typography';

interface BadgeProps extends React.BaseHTMLAttributes<HTMLSpanElement> {
  color?: string;
  children: React.ReactNode;
  size?: 'default' | 'sm';
  variant?: 'default' | 'outline' | 'secondary' | 'bordered';
}

const Badge = ({
  color = 'blue',
  children,
  size = 'default',
  className,
}: BadgeProps) => {
  return (
    <Typography
      as='span'
      variant='sm/medium'
      className={cn(
        'whitespace-nowrap dark:opacity-90 rounded',
        {
          'px-3 py-1.5': size === 'default',
          'px-2 py-1': size === 'sm',
        },
        {
          'bg-green-100 text-green-800 dark:bg-green-100/80': color === 'green',
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-100/80':
            color === 'yellow',
          'bg-red-100 text-red-800 dark:bg-red-200/80': color === 'red',
          'bg-primary-100/60 text-primary-500 dark:bg-primary-100/80':
            color === 'blue',
          'bg-gray-100/70 text-gray-800': color === 'gray',
          'bg-white text-gray-800': color === 'white',
          'border-gray-800/30 bg-gray-200 text-gray-500': color === 'dark-gray',
        },
        className
      )}
    >
      {children}
    </Typography>
  );
};

export default Badge;
