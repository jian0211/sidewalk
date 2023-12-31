import type { Metadata } from 'next';
import { RecoilRoot } from 'recoil';

export const metadata: Metadata = {
  title: 'Sidewalk with flying',
  description:
    'It is a website that visualizes and provides data from each airline so that travelers between Korea and Japan can make optimal choices according to various situations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
