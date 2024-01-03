import { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
