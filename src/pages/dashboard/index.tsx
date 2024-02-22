import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import TailwindChart from '@/components/chart';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';
import TableExample from '@/components/TableExample';
import { Button } from '@/components/ui/button';

function DashboardPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo title={`${t('pages.dashboard.home.title')}`} />
      <Layout pageTitle={t('pages.dashboard.home.title')} className='lg:px-8'>
        <div className='w-full h-full'>
          <div className='flex flex-col'>
            <div className='w-full flex justify-end items-center'>
              <Button
                variant='ghost'
                iconRight={<ChevronUpDownIcon className='w-[18px]' />}
              >
                Sort by
              </Button>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 divide-y-2 divide-x-2 divide-red-500'>
              <TailwindChart className='border-none rounded-none' />
              <TailwindChart className='border-none rounded-none' />
              <TailwindChart className='border-none rounded-none' />
              <TailwindChart className='border-none rounded-none' />
              <TailwindChart className='border-none rounded-none' />
              <TailwindChart className='border-none rounded-none' />
            </div>
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

{
  /* <div className='w-full rounded-md'>
          <>
            <Button
              type='reset'
              size='sm'
              variant='secondary'
              className='mt-2 inline-flex h-fit flex-none gap-1 '
              // disabled={!startDate && !endDate}
              // onClick={() => clearFilters()}
              iconLeft={<XMarkIcon className='w-6' />}
              onClick={() => setOpen(true)}
            >
              {t('components.buttons.clear_filters')}
            </Button>
          </>

          <DialogRoot open={open} onClose={() => setOpen(false)}>
            <DialogPortal>
              <DialogContent className={cn('bg-white')} fullScreen>
                <DialogTitle as='h3'>
                  <h3>Dialog Title</h3>
                </DialogTitle>
                <p className='body-sm inline text-gray-600'>
                  dialog description
                </p>

                <div className='mt-2'>
                  dialog content here
                  <Button>Done</Button>
                  <Button variant='outline'>Done</Button>
                  <Button variant='secondary'>Done</Button>
                  <Button variant='destructive'>Done</Button>
                  <Button variant='destructive-outline'>Done</Button>
                </div>
              </DialogContent>
            </DialogPortal>
          </DialogRoot>
          <div className='mb-6 flex flex-col gap-2'>
            
            <form className='flex flex-col gap-3'>
              <div className='flex flex-col items-center gap-3 sm:flex-row'>
                <div className='w-full'>
                  <Label>{t('components.labels.start_date')}</Label>
                  <Input
                    id='startDate'
                    name='startDate'
                    className='input w-full'
                    placeholder={`${t('components.labels.start_date')}`}
                    type='text'
                  />
                </div>
                <div className='w-full'>
                  <label htmlFor='startDate' className='label-sm'>
                    {t('components.labels.start_date')}
                  </label>
                  <Input
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
                  <Input
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
                  className='mt-2 inline-flex h-fit flex-none gap-1 '
                  // disabled={!startDate && !endDate}
                  // onClick={() => clearFilters()}
                  iconLeft={<XMarkIcon className='w-6' />}
                >
                  {t('components.buttons.clear_filters')}
                </Button>
              </div>

              <div className='space-x-3'>
                <Button
                  type='button'
                  iconLeft={<AdjustmentsHorizontalIcon className='w-6' />}
                >
                  {t('components.buttons.filter')}
                </Button>

                <Button
                  type='button'
                  iconLeft={<ArrowDownTrayIcon className='w-6' />}
                >
                  {t('components.buttons.download_results')}
                </Button>
              </div>
            </form>
          </div>

          <div>
            <TabsExample />
            <TableExample />
          </div>
        </div> */
}
