// 'use client';
// import { useTranslations } from 'next-intl';

// export default function HomePage() {
//   const t = useTranslations('title');

//   return <div>{t('title')}</div>;
// }
import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}
