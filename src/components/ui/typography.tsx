import { type VariantProps, cva } from 'class-variance-authority';

import cn from '@/lib/cn';

type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'md'
  | 'lg'
  | 'xl'
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-2xl';

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

// extend type of props to include html attributes for the element
export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  variant: `${FontSize}/${FontWeight}`;
}

const typographyVariants = cva('font-normal leading-normal', {
  variants: {
    variant: {
      // xs
      'xs/regular': 'text-xs font-regular leading-xs',
      'xs/medium': 'text-xs font-medium leading-xs',
      'xs/semibold': 'text-xs font-semibold leading-xs',
      'xs/bold': 'text-xs font-bold leading-xs',

      // sm
      'sm/regular': 'text-sm font-regular leading-sm',
      'sm/medium': 'text-sm font-medium leading-sm',
      'sm/semibold': 'text-sm font-semibold leading-sm',
      'sm/bold': 'text-sm font-bold leading-sm',

      // base
      'base/regular': 'text-base font-regular leading-base',
      'base/medium': 'text-base font-medium leading-base',
      'base/semibold': 'text-base font-semibold leading-base',
      'base/bold': 'text-base font-bold leading-base',

      // md
      'md/regular': 'text-md font-regular leading-md',
      'md/medium': 'text-md font-medium leading-md',
      'md/semibold': 'text-md font-semibold leading-md',
      'md/bold': 'text-md font-bold leading-md',

      // lg
      'lg/regular': 'text-lg font-regular leading-lg',
      'lg/medium': 'text-lg font-medium leading-lg',
      'lg/semibold': 'text-lg font-semibold leading-lg',
      'lg/bold': 'text-lg font-bold leading-lg',

      // xl
      'xl/regular': 'text-xl font-regular leading-xl',
      'xl/medium': 'text-xl font-medium leading-xl',
      'xl/semibold': 'text-xl font-semibold leading-xl',
      'xl/bold': 'text-xl font-bold leading-xl',

      // display-xs
      'display-xs/regular': 'text-display-xs font-regular leading-display-xs',
      'display-xs/medium': 'text-display-xs font-medium leading-display-xs',
      'display-xs/semibold': 'text-display-xs font-semibold leading-display-xs',
      'display-xs/bold': 'text-display-xs font-bold leading-display-xs',

      // display-sm
      'display-sm/regular': 'text-display-sm font-regular leading-display-sm',
      'display-sm/medium': 'text-display-sm font-medium leading-display-sm',
      'display-sm/semibold': 'text-display-sm font-semibold leading-display-sm',
      'display-sm/bold': 'text-display-sm font-bold leading-display-sm',

      // display-md
      'display-md/regular': 'text-display-md font-regular leading-display-md',
      'display-md/medium': 'text-display-md font-medium leading-display-md',
      'display-md/semibold': 'text-display-md font-semibold leading-display-md',
      'display-md/bold': 'text-display-md font-bold leading-display-md',

      // display-lg
      'display-lg/regular': 'text-display-lg font-regular leading-display-lg',
      'display-lg/medium': 'text-display-lg font-medium leading-display-lg',
      'display-lg/semibold': 'text-display-lg font-semibold leading-display-lg',
      'display-lg/bold': 'text-display-lg font-bold leading-display-lg',

      // display-xl
      'display-xl/regular': 'text-display-xl font-regular leading-display-xl',
      'display-xl/medium': 'text-display-xl font-medium leading-display-xl',
      'display-xl/semibold': 'text-display-xl font-semibold leading-display-xl',
      'display-xl/bold': 'text-display-xl font-bold leading-display-xl',

      // display-2xl
      'display-2xl/regular':
        'text-display-2xl font-regular leading-display-2xl',
      'display-2xl/medium': 'text-display-2xl font-medium leading-display-2xl',
      'display-2xl/semibold':
        'text-display-2xl font-semibold leading-display-2xl',
      'display-2xl/bold': 'text-display-2xl font-bold leading-display-2xl',
    },
  },
  defaultVariants: {
    variant: 'md/regular',
  },
});

export default function Typography({
  as,
  variant,
  className,
  ...props
}: TypographyProps) {
  const Comp = as;

  return (
    <Comp
      className={cn('text-balance', typographyVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Typography, typographyVariants };

// type LineHeight =
//   | 'xs'
//   | 'sm'
//   | 'base'
//   | 'md'
//   | 'lg'
//   | 'xl'
//   | 'display-xs'
//   | 'display-sm'
//   | 'display-md'
//   | 'display-lg'
//   | 'display-xl'
//   | 'display-2xl';
