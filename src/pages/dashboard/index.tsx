import { XMarkIcon } from '@heroicons/react/20/solid';
import {
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';
import TableExample from '@/components/TableExample';
import TabsExample from '@/components/TabsExample';
import { Button } from '@/components/ui/button';

function DashboardPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo title={`${t('pages.dashboard.home.title')}`} />

      <Layout pageTitle={t('pages.dashboard.home.title')}>
        <div className='w-full rounded-md'>
          <div className='mb-6 flex max-w-xl flex-col gap-2'>
            <h5 className='h5'>{t('components.headings.filter_by_date')}</h5>
            <form className='flex flex-col gap-3'>
              <div className='flex flex-col items-center gap-3 sm:flex-row'>
                <div className='w-full'>
                  <label htmlFor='startDate' className='label-sm'>
                    {t('components.labels.start_date')}
                  </label>
                  <input
                    id='startDate'
                    name='startDate'
                    className='input w-full'
                    placeholder={`${t('components.labels.start_date')}`}
                    type='date'
                  />
                </div>
                <div className='w-full'>
                  <label htmlFor='endDate' className='label-sm'>
                    {t('components.labels.end_date')}
                  </label>
                  <input
                    id='endDate'
                    name='endDate'
                    className='input w-full'
                    placeholder={`${t('components.labels.end_date')}`}
                    type='date'
                  />
                </div>
                <Button
                  type='reset'
                  size='sm'
                  variant='secondary'
                  className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end border-2 border-gray-200 sm:mt-0 sm:mb-1 sm:w-fit'
                  // disabled={!startDate && !endDate}
                  // onClick={() => clearFilters()}
                >
                  <XMarkIcon className='w-6' />
                  {t('components.buttons.clear_filters')}
                </Button>
              </div>

              <div className='flex flex-col gap-3 sm:flex-row'>
                <Button
                  type='button'
                  className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end sm:mt-0 sm:mb-1 sm:w-fit md:px-16'
                >
                  <AdjustmentsHorizontalIcon className='w-6' />
                  {t('components.buttons.filter')}
                </Button>
                <Button
                  type='button'
                  className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end sm:mt-0 sm:mb-1 sm:w-fit'
                >
                  <ArrowDownTrayIcon className='w-6' />
                  {t('components.buttons.download_results')}
                </Button>
              </div>
            </form>
          </div>

          <div>
            <TabsExample />
            <TableExample />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DashboardPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};
