import { Metadata } from 'next';
import '../../styles/global.css';
import * as stylex from '@stylexjs/stylex';
import Sidebar from '@/components/templates/sidebar/Sidebar';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Nav } from '@/components/templates/nav/Nav';
import { RecoilProvider } from '@/hooks/providers/RecoilPropvider';
import { Locales } from '@/types/locale';
import { palette } from '../../styles/globalTokens.stylex';
// import inject from '@stylexjs/dev-runtime';

// inject({
//   classNamePrefix: 'x',
//   dev: true,
//   test: false,
//   styleResolution: 'application-order',
//   useRemForFontSize: false,
// });

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
            <Sidebar locale={locale} />
            <main {...stylex.props(styles.main)}>
              <Nav locale={locale} />
              {children}
            </main>
          </RecoilProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

const styles = stylex.create({
  body: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    backgroundColor: palette.baseWhite,
    color: palette.darkGray,
  },
  main: {
    width: 'inherit',
    height: 'inherit',
  },
  jaFont: {
    fontFamily: 'Noto Sans JP',
  },
  koFont: {
    fontFamily: 'Noto Sans KR',
  },
});
