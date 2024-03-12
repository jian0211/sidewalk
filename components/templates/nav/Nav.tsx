'use client';

import '@/hooks/useInjectStyleX';
import * as stylex from '@stylexjs/stylex';
import { SearchForm } from './search/SearchForm';
import { LocaleSwitcher } from './localeConvert/LocaleSwitcher';
import { EditIcon, NotificationIcon } from '@/components/atoms/Icon';
import { ComponentPropsWithoutRef } from 'react';
import { useCurrentPath } from '@/hooks/useCurrentPath';
import Link from 'next/link';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Country } from '@/types/country';
import { path } from '@/types/path';

type NavProps = React.ComponentPropsWithoutRef<'nav'>;
type AirportsLayoutContainerProps = ComponentPropsWithoutRef<'div'>;
type NavGlobalEditBoxProps = React.ComponentPropsWithoutRef<'div'>;
type NotificationBoxProps = React.ComponentPropsWithoutRef<'div'>;

export const Nav = (props: NavProps) => {
  const { isAirportPath, isAirlinePath, isFligths, isHomePath } =
    useCurrentPath();
  return (
    <nav {...stylex.props(styles.nav)} {...props}>
      {isHomePath || isFligths ? (
        <SearchForm />
      ) : isAirportPath ? (
        <AirportsLayoutContainer />
      ) : isAirlinePath ? (
        'airline'
      ) : undefined}
      <LocaleSwitcher />
      <NavGlobalEditBox />
      <NotificationBox />
    </nav>
  );
};

const AirportsLayoutContainer = (props: AirportsLayoutContainerProps) => {
  const t = useTranslatedWord('nav.airports');
  const getUrl = (country: Country) => `${path.airports}/${country}`;

  return (
    <div {...stylex.props(styles.airportsLayoutContainer)} {...props}>
      <h2 {...stylex.props(styles.airportsLayoutTitle)}>{t('title')}</h2>
      <Link href={getUrl('jp')}>{t('japan')}</Link>
      <Link href={getUrl('ko')}>{t('korea')}</Link>
    </div>
  );
};

const NavGlobalEditBox = (props: NavGlobalEditBoxProps) => {
  return (
    <div {...props}>
      <EditIcon />
    </div>
  );
};

const NotificationBox = (props: NotificationBoxProps) => {
  return (
    <div {...props}>
      <NotificationIcon />
    </div>
  );
};

const styles = stylex.create({
  nav: {
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 3rem 0 2rem',
    gap: '1rem',
  },
  airportsLayoutContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
  },
  airportsLayoutTitle: {
    padding: '1.1rem',
  },
});
