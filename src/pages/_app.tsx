import { AppProps } from 'next/app';
import { appWithTranslation, I18n, i18n } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';

import '@/styles/globals.css';

import ToastProvider from '@/components/Toast/ToastProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <ToastProvider>
        <I18nextProvider i18n={i18n as I18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
