import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { appWithTranslation, I18n, i18n } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';
import { Toaster } from 'sonner';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
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
        <Analytics />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
