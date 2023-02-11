import { useRouter } from 'next/router';
import React from 'react';

import NotificationsDialog from '@/components/@pages/Notifications/NotificationsDialog';
import IconButtonOrLink from '@/components/ui/icon-button';

import SideBar from './SideBar';

// Header
const Header = ({ pageTitle }: { pageTitle: string }) => {
  const { pathname, locale } = useRouter();
  return (
    <header className='sticky top-0 z-50 backdrop-filter backdrop-blur-md flex-none transition-colors duration-300 border-b border-gray-900/10 bg-white/[0.5] lg:pl-0 py-4'>
      <div className='flex h-14 items-center justify-between px-4 lg:px-8'>
        <h1 className='block sm:hidden h5 capitalize'>{pageTitle}</h1>
        <h1 className='hidden sm:block lg:hidden h3 capitalize'>{pageTitle}</h1>
        <h1 className='hidden lg:block h2 capitalize'>{pageTitle}</h1>
        <div className='flex gap-2'>
          <IconButtonOrLink
            href={pathname}
            locale={locale === 'en' ? 'zh' : 'en'}
            variant='outline'
          >
            {locale}
          </IconButtonOrLink>
          <NotificationsDialog />
        </div>
      </div>
    </header>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className='mt-auto border-t w-full py-4 px-4 lg:px-8 text-gray-700'>
      <div className='w-full text-center md:text-left'>
        <h5 className='label-sm mb-1'>
          InView
          {/* {{ app.name }} */}
        </h5>
        <p className='text-xs text-gray-600'>
          Copyright © {new Date().getFullYear()} invix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function Layout({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen fixed top-0 left-0 w-screen h-screen antialiased duration-300 transition-colors text-gray-800 bg-white'>
      <aside>
        <SideBar />
      </aside>
      <div className='w-full overflow-auto flex flex-col'>
        <Header pageTitle={pageTitle} />
        <main className='pt-6 w-full px-4 lg:px-8'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
