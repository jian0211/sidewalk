import { Metadata } from 'next';
import AppProvider from './provider';
import '../../styles/global.css';
import * as stylex from '@stylexjs/stylex';
import Sidebar from '@/components/templates/sidebar/Sidebar';
import '@/hooks/useInjectStyleX';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const metadata: Metadata = {
  title: 'Sidewalk with flying',
  description:
    'It is a website that visualizes and provides data from each airline so that travelers between Korea and Japan can make optimal choices according to various situations.',
};

type LocaleProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: LocaleProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        {...stylex.props(
          styles.body,
          locale === 'ko' ? styles.koFont : styles.jaFont,
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Sidebar />
          <div>
            <nav>here is nav bar</nav>
            <AppProvider>{children}</AppProvider>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

const styles = stylex.create({
  body: {
    width: '100vh',
    height: '100vh',
    display: 'flex',
    backgroundColor: '#FFFFFF',
  },
  jaFont: {
    fontFamily: 'Noto Sans JP',
  },
  koFont: {
    fontFamily: 'Noto Sans KR',
  },
});
