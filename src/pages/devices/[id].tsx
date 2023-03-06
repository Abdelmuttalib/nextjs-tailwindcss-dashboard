import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import DevicesAlgorithmsTable from '@/components/@pages/devices-page/DevicesAlgorithmsTable/DevicesAlgorithmsTable';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Layout } from '@/components/layout';
import { ButtonLink } from '@/components/links';
import Seo from '@/components/Seo';

const DevicesCountPage = ({
  devicesCount,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation('common');

  return (
    <Layout pageTitle={t('pages.dashboard.devices.title')}>
      <Seo
        title={`${t('pages.dashboard.server_status_overview.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <ButtonLink
        href='/devices'
        className='mb-4 inline-flex items-center gap-2 rounded-full py-1 font-medium capitalize'
        variant='outline'
      >
        <ArrowLeftIcon className='w-5' />
        {t('pages.dashboard.devices.go_back')}
      </ButtonLink>
      <h3 className='h5 mb-4'>
        {t('pages.dashboard.devices.devices_algorithms')}
      </h3>

      <DevicesAlgorithmsTable data={devicesCount} />
    </Layout>
  );
};

export default DevicesCountPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: projects } = await fetchAPI.get('/status-overview');

  const currentProject = projects.filter(
    (project: ProjectT) => project._id === context?.params?.id
  );

  const data = {
    statisticServerAddr: currentProject[0].statisticServerAddr,
    unionId: currentProject[0].unionId,
  };
  const { data: currentProjectDevicesCount } = await fetchAPI.post(
    '/devices-count',
    data
  );

  return {
    props: {
      devicesCount: currentProjectDevicesCount,
      ...(await serverSideTranslations(context?.locale as string, ['common'])),
    },
  };
};
