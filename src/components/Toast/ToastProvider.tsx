import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSWRConfig } from 'swr';

import { ToastContext, ToastT } from '@/hooks/useToast';

import ToastContainer from './ToastContainer';

const SOCKET_IO_URL = process.env.NEXT_PUBLIC_SOCKET_IO_URL as string;
const socket = io(SOCKET_IO_URL);

let id = 0;
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastT[]>([]);
  const { mutate } = useSWRConfig();

  const addToast = useCallback(
    (description: ToastT['description'], type: ToastT['type']) => {
      setToasts((toasts) => [...toasts, { id: id++, description, type }]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: ToastT['id']) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  function initSocketIO() {
    socket.on(
      'Notification',
      (message: {
        notificationType: 'error' | 'sync' | 'device' | 'Device';
        description: string;
      }) => {
        mutate('/notifications');
        addToast(message.description, message.notificationType);
      }
    );
  }

  // function disconnectSocketIO() {
  //   socket.disconnect();
  // }

  useEffect(() => {
    initSocketIO();

    // return disconnectSocketIO();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
