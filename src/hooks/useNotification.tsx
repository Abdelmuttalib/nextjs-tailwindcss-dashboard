import axios from 'axios';
import useSWR from 'swr';

import { fetchAPI } from '@/lib/api';

export type NotificationT = {
  notificationPath: null | string;
  _id: '63d0c1d0e4997e8030ec7332';
  date: '2013-01-25T00:00:00.000Z';
  notificationType: 'error' | 'sync';
  read: 'true' | 'false';
  description: string;
  __v: number;
};

const useNotifications = () => {
  const { data: notifications } = useSWR<NotificationT[]>(
    '/notifications',
    fetchAPI
  );

  const newNotificationsExist = notifications?.some(
    (notification) => notification.read === 'false'
  );
  const markAllAsRead = () => {
    const config = {
      method: 'get',
      url: 'http://161.189.66.94:8090/api/mark-all',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios(config);
  };
  // const viewNotification = async (id: string) => {};

  return {
    notifications,
    newNotificationsExist,
    markAllAsRead,
    // viewNotification,
  };
};

export default useNotifications;
