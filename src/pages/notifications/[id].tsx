import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { baseApiUrl } from '@/lib/api';

import { StatusTypeT } from '@/components/@pages/log-query-page/types';
import NotificationsDetailsTable from '@/components/@pages/Notifications/NotificationsDetailsTable';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

export type NotificationDetailsT = {
  description: string;
  date: string;
  type: StatusTypeT;
};

const NotificationDetails = ({ data }: { data: NotificationDetailsT[] }) => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle={t('notifications.error_notification_details')}>
      <Seo
        title={`${t('notifications.error_notification_details')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <NotificationsDetailsTable data={data} />
    </Layout>
  );
};

export default NotificationDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context?.locale;
  const id = context?.params?.id as string;
  const res = await fetch(`${baseApiUrl}/view-notification`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  });
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};
