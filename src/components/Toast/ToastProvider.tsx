import { useCallback, useState } from 'react';

import { ToastContext, ToastT } from '@/hooks/useToast';

import ToastContainer from './ToastContainer';

let id = 0;

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastT[]>([]);

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

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
