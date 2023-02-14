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
    icon: <ServerStackIcon className='mx-2 my-1.5 w-5 text-current' />,
    href: '/server-status-overview',
  },
  {
    text: 'source_query',
    icon: <ServerIcon className='mx-2 my-1.5 w-5 text-current' />,
    href: '/source-query',
  },
  {
    text: 'forward_flow_query',
    icon: <ChevronDoubleRightIcon className='mx-2 my-1.5 w-5 text-current' />,
    href: '/forward-flow-query',
  },
  {
    text: 'log_query',
    icon: <CommandLineIcon className='mx-2 my-1.5 w-5 text-current' />,
    href: '/log-query',
  },
  {
    text: 'configuration_check',
    icon: <WrenchScrewdriverIcon className='mx-2 my-1.5 w-5 text-current' />,
    href: '/configuration-check',
  },
];

const SideBar = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className='hidden h-full min-h-screen w-full flex-col bg-[#06080b] lg:flex lg:w-72 xl:w-80'>
      <div className='flex-1 overflow-y-auto py-4 lg:pl-0'>
        <div className='text-center text-white'>
          <h5 className='h5'>
            {t('app.name')}
            <span className='ml-0.5 text-3xl text-primary'>.</span>
          </h5>
          <p className='label-sm block text-center text-gray-600'>
            {t('app.description')}
          </p>
        </div>
        <ul className='mt-10 mb-44 flex flex-col gap-1'>
          {dashboardLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className={`label-md group flex w-full items-center border-r-4 border-black py-3 pl-4 hover:border-gray-900 hover:bg-gray-900 focus:border-gray-900 focus:bg-gray-800 focus:text-primary-50 focus:outline-transparent xl:gap-3 ${
                  pathname === link.href
                    ? 'border-primary-400 bg-gray-800/50 text-primary'
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
