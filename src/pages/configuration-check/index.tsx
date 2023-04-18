import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

import api from '@/api';

const ConfigurationCheckPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);
  return (
    <Layout pageTitle={t('pages.dashboard.configuration_check.title')}>
      <Seo
        title={`${t('pages.dashboard.configuration_check.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <h3 className='h5'>
        {t('pages.dashboard.server_status_overview.projects')}
      </h3>
      <div className='mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {projects &&
          projects.map((project) => (
            <Link
              key={project._id}
              href={`/configuration-check/${project.unionId}`}
              className='flex h-36 items-center justify-between rounded-lg border-2 border-gray-200 px-6 hover:border-gray-800 dark:border-2 dark:border-gray-800 dark:bg-gray-900 dark:text-primary-100 dark:hover:text-primary-300'
            >
              <h3 className='h5'>{project.projectName}</h3>
              <ChevronRightIcon className='w-7' />
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default ConfigurationCheckPage;

export const getStaticProps: GetStaticProps<{ projects: ProjectT[] }> = async ({
  locale,
}) => {
  const { data: projects } = await api.projects.getAllProjects();
  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 10,
  };
};
