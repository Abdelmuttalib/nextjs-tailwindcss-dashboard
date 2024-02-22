import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import cn from '@/lib/cn';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const examples = [
  {
    name: 'Mail',
    href: '/examples/mail',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/mail',
  },
  {
    name: 'Dashboard',
    href: '/examples/dashboard',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard',
  },
  {
    name: 'Cards',
    href: '/examples/cards',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards',
  },
  {
    name: 'Tasks',
    href: '/examples/tasks',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks',
  },
  {
    name: 'Playground',
    href: '/examples/playground',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground',
  },
  {
    name: 'Forms',
    href: '/examples/forms',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms',
  },
  {
    name: 'Music',
    href: '/examples/music',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music',
  },
  {
    name: 'Authentication',
    href: '/examples/authentication',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/authentication',
  },
];

type ExamplesNavProps = React.HTMLAttributes<HTMLDivElement> & {
  example: string;
  setExample: (example: string) => void;
};

export function ExamplesNav({
  className,
  example,
  setExample,
  ...props
}: ExamplesNavProps) {
  return (
    <div className='relative'>
      <ScrollArea className='max-w-[600px] lg:max-w-none'>
        <div
          className={cn('mb-4 flex items-center gap-x-4', className)}
          {...props}
        >
          {examples.map((_example) => (
            <Button
              onClick={() => setExample(_example.name)}
              key={_example.name}
              className={cn(
                'text-sm transition-colors',
                example === _example.name ? '' : 'text-muted-foreground'
              )}
              variant={example === _example.name ? 'primary' : 'ghost'}
              size='sm'
            >
              {_example.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='invisible' />
      </ScrollArea>
    </div>
  );
}

interface ExampleCodeLinkProps {
  pathname: string | null;
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
  const example = examples.find((example) =>
    pathname?.startsWith(example.href)
  );

  if (!example?.code) {
    return null;
  }

  return (
    <Link
      href={example?.code}
      target='_blank'
      rel='nofollow'
      className='absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex'
    >
      View code
      <ArrowRightIcon className='ml-1 h-4 w-4' />
    </Link>
  );
}
