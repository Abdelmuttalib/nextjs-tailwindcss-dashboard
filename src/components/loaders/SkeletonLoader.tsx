import * as React from 'react';
import ContentLoader from 'react-content-loader';

import cn from '@/lib/cn';

type SkeletonLoaderProps = React.ComponentPropsWithoutRef<'div'>;

export default function SkeletonLoader({ className }: SkeletonLoaderProps) {
  return (
    <div className={cn('relative overflow-hidden rounded', className)}>
      <ContentLoader preserveAspectRatio='none' speed={2} viewBox='0 0 100 100'>
        <rect width='100%' height='100%' />
      </ContentLoader>
    </div>
  );
}
