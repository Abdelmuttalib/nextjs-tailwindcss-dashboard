import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { appWithTranslation, I18n, i18n } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Toaster } from 'sonner';

import '@/styles/globals.css';
import '@/styles/themes.css';

import { useFont } from '@/hooks/use-font';
import { useFontSize } from '@/hooks/use-font-size';
import { useThemeColor } from '@/hooks/use-theme-color';

import TailwindIndicator from '@/components/tailwind-indicator';
import { ThemeColorWrapper } from '@/components/theme-color-wrapper';

function MyApp({ Component, pageProps }: AppProps) {
  const [themeColor] = useThemeColor();
  const [font] = useFont();

  const fontClass = `font-${font.font || 'general-sans'}`;

  const [fontSize] = useFontSize();

  const fontSizeClass = `theme-text-sizes-${fontSize.fontSize}`;

  useEffect(() => {
    if (document) {
      // Remove existing font classes and add the new one

      document.documentElement.classList.forEach((className) => {
        if (className.startsWith('font-')) {
          document.documentElement.classList.remove(className);
        }
      });
      document.documentElement.classList.add(fontClass);

      // Remove existing theme color classes and add the new one
      document.documentElement.classList.forEach((className) => {
        if (className.startsWith('theme-')) {
          document.documentElement.classList.remove(className);
        }
      });
      document.documentElement.classList.add(`theme-${themeColor.colorName}`);

      // Only add/remove font size class if it's not 'default'
      if (fontSizeClass) {
        document.documentElement.classList.forEach((className) => {
          if (className.startsWith('theme-text-sizes-')) {
            document.documentElement.classList.remove(className);
          }
        });
        document.documentElement.classList.add(fontSizeClass);
      }
    }
  }, [fontClass, fontSizeClass, themeColor]);

  return (
    <ThemeColorWrapper
      defaultTheme={themeColor.colorName}
      // className={cn(fontClass, fontSizeClass)}
    >
      <ThemeProvider attribute='class' themes={['light', 'dark']}>
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
          {/* {fontClass} */}
          <Component {...pageProps} />
          <TailwindIndicator />
          <Analytics />
        </I18nextProvider>
      </ThemeProvider>
    </ThemeColorWrapper>
  );
}

export default appWithTranslation(MyApp);
