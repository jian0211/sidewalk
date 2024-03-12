import Link from 'next/link';
import { LayoutProps } from '../../../layout';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Country } from '@/types/country';
import { path } from '@/types/path';
import * as stylex from '@stylexjs/stylex';

export default function Layout({ children }: LayoutProps) {
  const t = useTranslatedWord('nav.airports');
  const getUrl = (country: Country) => `${path.airports}/${country}`;
  return (
    <>
      <Link href={getUrl('jp')} {...stylex.props(styles.airportsLayoutLink)}>
        {t('japan')}
      </Link>
      <Link href={getUrl('ko')} {...stylex.props(styles.airportsLayoutLink)}>
        {t('korea')}
      </Link>
      {children}
    </>
  );
}

const styles = stylex.create({
  airportsLayoutLink: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'black',
  },
});
