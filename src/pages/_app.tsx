import { AppProps } from 'next/app';
import { appWithTranslation, I18n, i18n } from 'next-i18next';
import { I18nextProvider } from 'react-i18next';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n as I18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default appWithTranslation(MyApp);
