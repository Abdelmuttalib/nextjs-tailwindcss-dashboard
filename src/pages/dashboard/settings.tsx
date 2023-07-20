import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

const SettingsPage = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Seo title={`${t('pages.dashboard.settings.title')}`} />

      <Layout pageTitle={t('pages.dashboard.settings.title')}>settings</Layout>
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
