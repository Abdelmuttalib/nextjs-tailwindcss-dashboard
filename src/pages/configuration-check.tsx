import { ClockIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@/components/layout';

const ConfigurationCheckPage = () => {
  const { t } = useTranslation(['common']);
  return (
    <Layout pageTitle={t('pages.dashboard.configuration_check.title')}>
      <div className='flex h-40 w-full items-center justify-center gap-2 rounded bg-gray-900 text-gray-100 dark:bg-gray-800/30'>
        <ClockIcon className='w-10' />{' '}
        <h2 className='h5 md:h2'> Ongoing development...</h2>
      </div>
    </Layout>
  );
};

export default ConfigurationCheckPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
