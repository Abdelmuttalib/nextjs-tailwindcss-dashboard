import { Menu, Transition } from '@headlessui/react';
import { CheckIcon, LanguageIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import cn from '@/lib/cn';

import { IconButton } from '@/components/ui/icon-button';

export default function LanguageSwitcher() {
  const {
    locale: currentLocale,
    locales,
    pathname,
    asPath,
    push,
    query,
  } = useRouter();
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button as='div'>
          <IconButton
            variant='outline'
            size='lg'
            className='relative hidden p-3.5 sm:block'
          >
            {/* {currentLocale} */}
            <LanguageIcon className='w-6' />
          </IconButton>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='relative'>
            {locales?.map((locale) => (
              <Menu.Item key={locale}>
                <div className='relative'>
                  <button
                    onClick={() => {
                      push({ pathname, query }, asPath, {
                        locale: locale,
                      });
                    }}
                    className={cn(
                      'flex w-full items-center px-2 py-2 font-medium',
                      {
                        'bg-primary-500 text-white': locale === currentLocale,
                        'text-gray-900 hover:bg-primary-100':
                          locale !== currentLocale,
                      }
                    )}
                  >
                    {locale === 'en' && 'English'}
                    {locale === 'es' && 'Español'}
                    {locale === 'zh' && '中文'}
                    {locale == currentLocale && (
                      <CheckIcon className='absolute right-2 h-4 w-4 text-current' />
                    )}
                  </button>
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
