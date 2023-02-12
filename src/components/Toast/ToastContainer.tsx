import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ToastT } from '@/hooks/useToast';

import Toast from './Toast';

const ToastContainer = ({ toasts }: { toasts: ToastT[] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(
    <div
      className={`${
        toasts && toasts.length > 0 ? 'fixed' : 'hidden'
      } right-0 top-8 w-screen md:bottom-4 md:right-4 md:w-96`}
    >
      {toasts.map((item: ToastT) => (
        <Toast
          key={item.id}
          id={item.id}
          description={item.description}
          type={item.type}
        ></Toast>
      ))}
    </div>,
    document.body
  );
};

export default ToastContainer;
