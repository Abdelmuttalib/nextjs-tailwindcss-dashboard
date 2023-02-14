import { useRouter } from 'next/router';
import React from 'react';

import NotificationsDialog from '@/components/@pages/Notifications/NotificationsDialog';
import { IconLink } from '@/components/ui/icon-button';

import SideBar from './SideBar';

// Header
const Header = ({ pageTitle }: { pageTitle: string }) => {
  const { pathname, locale, query } = useRouter();
  // const { theme, setTheme } = useTheme();

  return (
    <header className='sticky top-0 z-50 flex-none border-b border-gray-900/10 bg-white/[0.5] py-4 backdrop-blur-md backdrop-filter transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 lg:pl-0'>
      <div className='flex h-14 items-center justify-between px-4 lg:px-8'>
        <h1 className='h5 block capitalize sm:hidden'>{pageTitle}</h1>
        <h1 className='h3 hidden capitalize sm:block lg:hidden'>{pageTitle}</h1>
        <h1 className='h2 hidden capitalize lg:block'>{pageTitle}</h1>
        <div className='flex gap-2'>
          <IconLink
            href={
              pathname === '/notifications/[id]'
                ? `/notifications/${query.id}`
                : pathname
            }
            locale={locale === 'en' ? 'zh' : 'en'}
            variant='outline'
            size='lg'
          >
            {locale}
          </IconLink>
          {/* <IconButton
            type='button'
            variant='outline'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <SunIcon className='w-7' />
            ) : (
              <MoonIcon className='w-7 p-0.5' />
            )}
          </IconButton> */}
          <NotificationsDialog />
        </div>
      </div>
    </header>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className='mt-auto w-full border-t py-4 px-4 text-gray-700 dark:border-gray-800 dark:text-gray-300 lg:px-8'>
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
  // const { addToast } = useToast();
  // const socket = io('http://161.189.66.94:8090');

  // socket.on('New Notification', (message) => {
  //   console.log('received notification:', message);
  //   addToast(message, 'error');
  // });

  // socket.on('connect', () => {
  //   console.log('connect: ', socket.id);
  // });

  // socket.on('disconnect', () => {
  //   console.log('disconnect: ', socket.id);
  // });

  return (
    <div className='fixed top-0 left-0 flex h-screen min-h-screen w-screen bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200'>
      <aside>
        <SideBar />
      </aside>
      <div className='flex w-full flex-col overflow-auto'>
        <Header pageTitle={pageTitle} />
        <main className='w-full px-4 pt-6 lg:px-8'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
