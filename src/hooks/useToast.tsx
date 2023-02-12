export type ToastT = {
  id: number;
  type: string;
  description: string;
};
import { createContext, useContext } from 'react';

type ToastContextProps = {
  addToast: (description: ToastT['description'], type: ToastT['type']) => void;
  removeToast: (id: ToastT['id']) => void;
};

export const ToastContext = createContext<ToastContextProps | null>(null);

const useToast = (): ToastContextProps => {
  const result = useContext(ToastContext);

  if (!result) {
    throw new Error();
  }

  return result;
};

export default useToast;
