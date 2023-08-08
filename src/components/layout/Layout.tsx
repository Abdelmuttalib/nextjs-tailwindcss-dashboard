import { Bars3Icon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '@/components/language-switcher';
import NotificationsDialog from '@/components/notifications/NotificationsDialog';
import ThemeSwitcher from '@/components/theme-switcher';
import { IconButton } from '@/components/ui/icon-button';

import SideBar from './SideBar';

// Header
const Header = ({ pageTitle }: { pageTitle: string }) => {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  return (
    <>
      {showSidebarMenu && (
        <SideBar mode='mobile' setShowSidebarMenu={setShowSidebarMenu} />
      )}
      <header className='sticky top-0 z-40 flex-none border-b border-gray-900/10 bg-white/[0.5] py-4 backdrop-blur-md backdrop-filter transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 lg:pl-0'>
        <div className='flex h-14 items-center justify-between px-4 lg:px-8'>
          <div className='flex items-center gap-3'>
            <IconButton
              className='bg-white focus:border-2 focus:border-gray-800 lg:hidden'
              variant='secondary'
              size='sm'
              onClick={() => setShowSidebarMenu(true)}
            >
              <Bars3Icon className='w-6' />
            </IconButton>
            <h1 className='h5 block capitalize sm:hidden'>{pageTitle}</h1>
            <h1 className='h3 hidden capitalize sm:block xl:hidden'>
              {pageTitle}
            </h1>
            <h1 className='h2 hidden capitalize xl:block'>{pageTitle}</h1>
          </div>

          <div className='flex gap-2'>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <NotificationsDialog />
          </div>
        </div>
      </header>
    </>
  );
};

// Footer
const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className='mt-auto w-full border-t py-4 px-4 text-gray-700 dark:border-gray-800 dark:text-gray-300 lg:px-8'>
      <div className='w-full text-center md:text-left'>
        <h5 className='label-sm mb-1'>{t('app.name')}</h5>
        <p className='text-xs text-gray-600'>
          Copyright © {new Date().getFullYear()}.
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
    <div className='fixed top-0 left-0 flex h-full min-h-[100svh] w-screen bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200'>
      <aside>
        <SideBar mode='normal' />
      </aside>
      <div className='flex w-full flex-col overflow-auto'>
        <Header pageTitle={pageTitle} />
        <main className='w-full px-4 pt-6 pb-10 lg:px-8'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
