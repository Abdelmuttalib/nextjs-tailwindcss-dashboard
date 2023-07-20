import {
  Cog6ToothIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import React from 'react';

import cn from '@/lib/cn';

import { IconButton, IconLink } from '@/components/ui/icon-button';

type DashboardLinkT = {
  text: string;
  icon: React.ReactNode;
  href: string;
};

export const dashboardLinks: DashboardLinkT[] = [
  {
    text: 'home',
    icon: <HomeIcon className='mx-2 my-1.5 w-5 text-current' />,
    href: '/dashboard',
  },
  {
    text: 'settings',
    icon: <Cog6ToothIcon className='mx-2 my-1.5 w-5 text-current' />,
    href: '/dashboard/settings',
  },
];

const SideBar = ({
  mode = 'normal',
  setShowSidebarMenu,
}: {
  mode: 'mobile' | 'normal';
  setShowSidebarMenu?: (show: boolean) => void;
}) => {
  const { pathname, locale } = useRouter();
  const { t } = useTranslation('common');
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        'bg-[#06080b] dark:border-r dark:border-gray-800/20 dark:bg-[#0A0F13]',
        {
          'hidden h-full min-h-screen w-full flex-col lg:flex lg:w-72 xl:w-80':
            mode === 'normal',
          'fixed inset-0 z-50 flex h-[100svh] w-full flex-col  backdrop-blur-md backdrop-filter transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 lg:hidden':
            mode === 'mobile',
        }
      )}
    >
      <div className='relative flex-1 overflow-y-auto py-4 lg:pl-0'>
        {setShowSidebarMenu && (
          <IconButton
            className='absolute top-6 left-4 focus:border-2 focus:border-gray-800'
            variant='outline'
            size='sm'
            onClick={() => setShowSidebarMenu(false)}
          >
            <XMarkIcon className='w-6' aria-hidden='true' />
          </IconButton>
        )}
        <div className='text-center text-white'>
          <h5 className='h5'>
            Dashboard
            <span className='ml-0.5 text-3xl text-primary'>.</span>
          </h5>
          <p className='font-medium text-gray-500'>{t('app.name')}</p>
        </div>
        <ul className='mt-10 flex flex-col gap-1 md:mb-44'>
          {dashboardLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className={cn(
                  'label-md group flex w-full items-center border-r-4 border-transparent py-3 pl-4 hover:border-transparent hover:bg-gray-900 focus:border-gray-900 focus:bg-gray-900/80 focus:text-primary-50 focus:outline-transparent xl:gap-3',
                  {
                    'border-r-primary-400 bg-gray-800/50 text-primary dark:bg-gray-800/40':
                      pathname === link.href,
                    'text-gray-100': pathname !== link.href,
                  }
                )}
              >
                {link.icon}
                <span className='ml-2 text-gray-100 first-letter:uppercase'>
                  {t(`pages.dashboard.${link.text}.title`)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='mt-10 flex w-full justify-center gap-3 px-5 sm:hidden'>
          <IconLink
            href={pathname}
            locale={locale === 'en' ? 'zh' : 'en'}
            variant='outline'
            size='lg'
          >
            {locale}
          </IconLink>
          <IconButton
            type='button'
            variant='outline'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <SunIcon className='w-7' />
            ) : (
              <MoonIcon className='w-7 p-0.5' />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
