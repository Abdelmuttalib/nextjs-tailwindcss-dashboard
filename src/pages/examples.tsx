import React from 'react';

import AuthenticationPage from '@/components/examples/authentication';
import CardsPage from '@/components/examples/cards';
import DashboardPage from '@/components/examples/dashboard';
import SettingsProfilePage from '@/components/examples/forms';
// import MailPage from '@/components/examples/mail';
import MusicPage from '@/components/examples/music';
import PlaygroundPage from '@/components/examples/playground';
import { ExamplesNav } from '@/components/examples-nav';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';

export default function ExamplesPage() {
  const [example, setExample] = React.useState('Dashboard');

  return (
    <div className='container mx-auto'>
      <PageHeader>
        {/* <Announcement /> */}
        <PageHeaderHeading className='hidden md:block'>
          Check out some examples
        </PageHeaderHeading>
        <PageHeaderHeading className='md:hidden'>Examples</PageHeaderHeading>
        <PageHeaderDescription>
          Dashboard, cards, authentication. Some examples built using the
          components. Use this as a guide to build your own.
        </PageHeaderDescription>
        {/* <PageActions>
            <Link
              href='/docs'
              className={cn(buttonVariants(), 'rounded-[6px]')}
            >
              Get Started
            </Link>
            <Link
              href='/components'
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-[6px]'
              )}
            >
              Components
            </Link>
          </PageActions> */}
      </PageHeader>
      <div className='mx-auto'>
        <ExamplesNav example={example} setExample={setExample} />
        <div className='overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl'>
          {example === 'Dashboard' && <DashboardPage />}
          {example === 'Music' && <MusicPage />}
          {example === 'Playground' && <PlaygroundPage />}
          {example === 'Forms' && <SettingsProfilePage />}
          {example === 'Cards' && <CardsPage />}
          {example === 'Authentication' && <AuthenticationPage />}
        </div>
      </div>
    </div>
  );
}
