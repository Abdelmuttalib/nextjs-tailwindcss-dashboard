import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from 'next-themes';
import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from '@/lib/cn';
import { FONT_SIZES, FONTS } from '@/lib/fonts';
import { PRIMARY_THEME_COLORS } from '@/lib/theme-colors';
import { FontValue, useFont } from '@/hooks/use-font';
import { FontSizeValue, useFontSize } from '@/hooks/use-font-size';
import { useMounted } from '@/hooks/use-mounted';
import { ThemeColorType, useThemeColor } from '@/hooks/use-theme-color';

import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Typography from '@/components/ui/typography';

// const settings = [
//   'General',
//   'Domains',
//   'Integrations',
//   'Webhooks',
//   'Email',
//   'Affiliates',
//   'Recovery',
//   'Plans',
//   'Billing',
//   'Payouts',
//   'Team',
// ];

function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Select defaultValue={theme} onValueChange={(v) => setTheme(v)}>
      <SelectTrigger className={cn('w-[180px]')}>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='light'>Light</SelectItem>
        <SelectItem value='dark'>Dark</SelectItem>
        <SelectItem value='system'>System</SelectItem>
      </SelectContent>
    </Select>
  );
}

function ThemeColorSelect() {
  const [themeColor, setThemeColor] = useThemeColor();

  return (
    <Select
      defaultValue={themeColor.colorName}
      onValueChange={(v: ThemeColorType) =>
        setThemeColor({
          colorName: v,
        })
      }
    >
      <SelectTrigger className={cn('w-[220px]')}>
        <SelectValue placeholder='Theme Color' />
      </SelectTrigger>
      <SelectContent>
        {PRIMARY_THEME_COLORS?.map(
          ({ name, color }: { name: ThemeColorType; color: string }) => (
            <SelectItem
              key={`${name}`}
              // onClick={() => {
              //   setThemeColor({
              //     colorName: name,
              //   });
              // }}

              value={name}
            >
              <span className='inline-flex items-center pr-2'>
                <span
                  style={{
                    backgroundColor: color,
                  }}
                  className={cn('w-3 h-3 rounded-sm mr-2 block')}
                ></span>
                <>{name}</>
              </span>
            </SelectItem>
          )
        )}
      </SelectContent>
    </Select>
  );
}

function FontSelect() {
  const [font, setFont] = useFont();

  return (
    <Select
      defaultValue={font.font}
      onValueChange={(v: FontValue) =>
        setFont({
          font: v,
        })
      }
    >
      <SelectTrigger className={cn('w-[220px]')}>
        <SelectValue placeholder='Theme Color' />
      </SelectTrigger>
      <SelectContent>
        {FONTS?.map(({ name, value }) => (
          <SelectItem
            key={`${name}`}
            // onClick={() => {
            //   setThemeColor({
            //     colorName: name,
            //   });
            // }}

            value={value}
          >
            <>{name}</>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function FontSizeSelect() {
  const [fontSize, setFontSize] = useFontSize();

  return (
    <Select
      defaultValue={fontSize.fontSize}
      onValueChange={(v: FontSizeValue) =>
        setFontSize({
          fontSize: v,
        })
      }
    >
      <SelectTrigger className={cn('w-[220px]')}>
        <SelectValue placeholder='Theme Color' />
      </SelectTrigger>
      <SelectContent>
        {FONT_SIZES?.map((fontS) => (
          <SelectItem key={`${fontS}`} value={fontS}>
            <>{fontS}</>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const SettingsPage = () => {
  const { t } = useTranslation('common');

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <>
      <Seo title={`${t('pages.dashboard.settings.title')}`} />

      <Layout pageTitle={t('pages.dashboard.settings.title')}>
        <div className='max-w-xl mx-auto'>
          {/* <div className='w-full flex gap-x-2 border-b border-border pb-6'>
            {settings.map((setting, index) => (
              <ButtonLink
                key={index}
                href=''
                variant='ghost'
                className='text-foreground-lighter'
              >
                {setting}
              </ButtonLink>
            ))}
          </div> */}
          <div>
            <div className='px-4 sm:px-0 space-y-2'>
              <Typography as='h3' variant='base/medium' className=''>
                Preferences
              </Typography>
              <Typography
                as='p'
                variant='sm/medium'
                className='text-foreground-lighter'
              >
                Manage your preferences.
              </Typography>
            </div>

            <div className='mt-6 border-t border-border'>
              <dl className='divide-y divide-border'>
                <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    Theme
                  </dt>
                  <dd className='mt-1 text-sm leading-6 text-foreground-light sm:col-span-2 sm:mt-0'>
                    <ThemeSelect />
                  </dd>
                </div>
                <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    Interface theme color
                  </dt>
                  <dd className='mt-1 text-sm leading-6 text-foreground-light sm:col-span-2 sm:mt-0'>
                    <ThemeColorSelect />
                  </dd>
                </div>
                <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    Interface font
                  </dt>
                  <dd className='mt-1 text-sm leading-6 text-foreground-light sm:col-span-2 sm:mt-0'>
                    <FontSelect />
                  </dd>
                </div>
                <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    Font size
                  </dt>
                  <dd className='mt-1 text-sm leading-6 text-foreground-light sm:col-span-2 sm:mt-0'>
                    <FontSizeSelect />
                  </dd>
                </div>
                {/* <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    Email address
                  </dt>
                  <dd className='mt-1 text-sm leading-6 text-foreground-light sm:col-span-2 sm:mt-0'>
                    margotfoster@example.com
                  </dd>
                </div>
                <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    Salary expectation
                  </dt>
                  <dd className='mt-1 text-sm leading-6 text-foreground-light sm:col-span-2 sm:mt-0'>
                    $120,000
                  </dd>
                </div>
                <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    About
                  </dt>
                  <dd className='mt-1 text-sm leading-6 text-foreground-light sm:col-span-2 sm:mt-0'>
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
                <div className='px-4 py-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                  <dt className='text-sm font-medium leading-6 text-foreground'>
                    Attachments
                  </dt>
                  <dd className='mt-2 text-sm text-foreground sm:col-span-2 sm:mt-0'>
                    <ul
                      role='list'
                      className='divide-y divide-border-light rounded-md border border-gray-200'
                    >
                      <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                        <div className='flex w-0 flex-1 items-center'>
                          <PaperClipIcon
                            className='h-5 w-5 flex-shrink-0 text-gray-400'
                            aria-hidden='true'
                          />
                          <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                            <span className='truncate font-medium'>
                              resume_back_end_developer.pdf
                            </span>
                            <span className='flex-shrink-0 text-gray-400'>
                              2.4mb
                            </span>
                          </div>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a
                            href='#'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Download
                          </a>
                        </div>
                      </li>
                      <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                        <div className='flex w-0 flex-1 items-center'>
                          <PaperClipIcon
                            className='h-5 w-5 flex-shrink-0 text-gray-400'
                            aria-hidden='true'
                          />
                          <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                            <span className='truncate font-medium'>
                              coverletter_back_end_developer.pdf
                            </span>
                            <span className='flex-shrink-0 text-gray-400'>
                              4.5mb
                            </span>
                          </div>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a
                            href='#'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div> */}
              </dl>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SettingsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};
