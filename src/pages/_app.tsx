import { AppProps } from 'next/app';
import { appWithTranslation, I18n, i18n } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { useEffect, useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import { io } from 'socket.io-client';
import { toast, Toaster } from 'sonner';
import { useSWRConfig } from 'swr';

import '@/styles/globals.css';

import { fetchAPI } from '@/lib/api';

import Toast from '@/components/Toast/Toast';

const SOCKET_IO_URL = process.env.NEXT_PUBLIC_SOCKET_IO_URL as string;
const socket = io(SOCKET_IO_URL);

function MyApp({ Component, pageProps }: AppProps) {
  const { mutate } = useSWRConfig();
  const socketInitialized = useRef(false);

  function initSocketIO() {
    socket.on(
      'Notification',
      (message: {
        notificationType: 'error' | 'sync' | 'device' | 'Device';
        description: string;
      }) => {
        mutate('/notifications');
        toast.custom(() => (
          <Toast
            description={message.description}
            type={message.notificationType}
          />
        ));

        fetchAPI.get('/check-devices-algorithm');
      }
    );
  }

  // function disconnectSocketIO() {
  //   socket.disconnect();
  // }

  useEffect(() => {
    if (socketInitialized.current) return;
    socketInitialized.current = true;
    initSocketIO();

    // return disconnectSocketIO();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider attribute='class'>
      <Toaster
        position='top-right'
        richColors
        expand
        visibleToasts={6}
        closeButton
        style={{
          marginRight: '1.5rem',
        }}
      />
      <I18nextProvider i18n={i18n as I18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
