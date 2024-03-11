import { Metadata } from 'next';
import '../../styles/global.css';
import * as stylex from '@stylexjs/stylex';
import Sidebar from '@/components/templates/sidebar/Sidebar';
import '@/hooks/useInjectStyleX';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Nav } from '@/components/templates/nav/Nav';
import { RecoilProvider } from '@/hooks/providers/RecoilPropvider';
import { Locales } from '@/types/locale';

export const metadata: Metadata = {
  title: 'Sidewalk with flying',
  description:
    'It is a website that visualizes and provides data from each airline so that travelers between Korea and Japan can make optimal choices according to various situations.',
};

export type LayoutProps = {
  children: React.ReactNode;
  params: { locale: Locales };
};

export default function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
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
          <RecoilProvider>
            <Sidebar />
            <div style={{ width: '100%' }}>
              <Nav />
              {children}
            </div>
          </RecoilProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

const styles = stylex.create({
  body: {
    width: '100vw',
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
