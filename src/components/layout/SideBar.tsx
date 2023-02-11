import {
  ChevronDoubleRightIcon,
  CommandLineIcon,
  ServerIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

type DashboardLinkT = {
  text: string;
  icon: React.ReactNode;
  href: string;
};

export const dashboardLinks: DashboardLinkT[] = [
  {
    text: 'server_status_overview',
    icon: <ServerStackIcon className='w-5 text-current mx-2 my-1.5' />,
    href: '/server-status-overview',
  },
  {
    text: 'source_query',
    icon: <ServerIcon className='w-5 text-current mx-2 my-1.5' />,
    href: '/source-query',
  },
  {
    text: 'forward_flow_query',
    icon: <ChevronDoubleRightIcon className='w-5 text-current mx-2 my-1.5' />,
    href: '/forward-flow-query',
  },
  {
    text: 'log_query',
    icon: <CommandLineIcon className='w-5 text-current mx-2 my-1.5' />,
    href: '/log-query',
  },
  {
    text: 'configuration_check',
    icon: <WrenchScrewdriverIcon className='w-5 text-current mx-2 my-1.5' />,
    href: '/configuration-check',
  },
];

const SideBar = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className='bg-black hidden lg:flex lg:w-72 xl:w-80 min-h-screen flex-col w-full h-full'>
      <div className='flex-1 overflow-y-auto lg:pl-0 py-4'>
        <div className='text-white text-center'>
          <h5 className='h5'>
            {t('app.name')}
            <span className='text-primary ml-0.5 text-3xl'>.</span>
          </h5>
          <p className='label-sm block text-center text-gray-600'>
            {t('app.description')}
          </p>
        </div>
        <ul className='flex flex-col gap-1 mt-10 mb-44'>
          {dashboardLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className={`label-md group flex xl:gap-3 items-center w-full py-3 pl-4 bg-black hover:bg-gray-800 focus:bg-gray-800 focus:text-primary-50 border-r-4 border-transparent focus:outline-transparent ${
                  pathname === link.href
                    ? 'border-primary-400 text-primary bg-gray-800 font-bold'
                    : 'text-gray-100'
                }`}
              >
                {link.icon}
                <span className='ml-2 text-gray-100 first-letter:uppercase'>
                  {t(`pages.dashboard.${link.text}.title`)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
