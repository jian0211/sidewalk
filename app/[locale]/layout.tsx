import { Metadata } from 'next';
import AppProvider from './provider';
import '../../styles/global.css';
import inject from '@stylexjs/dev-runtime';
import * as stylex from '@stylexjs/stylex';

/**
 * StyleX ローカルだけですること。
 * https://stylexjs.com/docs/learn/installation/#local-development-only
 * 現在StyleXについて設定がよくできなく、一旦これを使って後で解決をする。
 * いつか、Injectは削除予定
 */
inject({
  classNamePrefix: 'x',
  dev: true,
  test: false,
  styleResolution: 'application-order',
  useRemForFontSize: false,
});

export const metadata: Metadata = {
  title: 'Sidewalk with flying',
  description:
    'It is a website that visualizes and provides data from each airline so that travelers between Korea and Japan can make optimal choices according to various situations.',
};

type LocaleProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleProps) {
  return (
    <html lang={locale}>
      <body>
        <nav>here is nav bar</nav>
        <div {...stylex.props(mainStyles.test)}>ddd</div>

        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

const mainStyles = stylex.create({
  test: {
    width: '100%',
    backgroundColor: 'pink',
  },
});
