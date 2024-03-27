'use client';

import * as stylex from '@stylexjs/stylex';
import { SearchForm } from './search/SearchForm';
import { LocaleSwitcher } from './localeConvert/LocaleSwitcher';
import { Icons } from '@/components/atoms/Icon';
import { ComponentPropsWithoutRef } from 'react';
import { useCurrentPath } from '@/hooks/useCurrentPath';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import { designStyles } from '@/components/styles';

type NavProps = React.ComponentPropsWithoutRef<'nav'>;
type AirportsLayoutContainerProps = ComponentPropsWithoutRef<'h1'>;
type AirlinesLayoutContainerProps = ComponentPropsWithoutRef<'h1'>;
type NavGlobalEditBoxProps = React.ComponentPropsWithoutRef<'div'>;
type NotificationBoxProps = React.ComponentPropsWithoutRef<'div'>;

export const Nav = (props: NavProps) => {
  const { isAirportPath, isAirlinePath, isFligths, isHomePath } =
    useCurrentPath();
  return (
    <nav {...props} {...stylex.props(styles.nav)}>
      {isHomePath || isFligths ? (
        <SearchForm />
      ) : isAirportPath ? (
        <AirportsLayoutContainer />
      ) : isAirlinePath ? (
        <AirlinesLayoutContainer />
      ) : undefined}

      <LocaleSwitcher />
      <NavGlobalEditBox />
      <NotificationBox />
    </nav>
  );
};

const AirportsLayoutContainer = (props: AirportsLayoutContainerProps) => {
  const t = useTranslatedWord('nav.airports');
  return (
    <h1 {...stylex.props(styles.airportsLayoutTitle)} {...props}>
      {t('title')}
    </h1>
  );
};

const AirlinesLayoutContainer = (props: AirlinesLayoutContainerProps) => {
  const t = useTranslatedWord('nav.airlines');
  return (
    <h1 {...stylex.props(styles.airportsLayoutTitle)} {...props}>
      {t('title')}
    </h1>
  );
};

const NavGlobalEditBox = (props: NavGlobalEditBoxProps) => {
  return (
    <div {...props}>
      <Icons src="IconEdit" useOutline useCursor />
    </div>
  );
};

const NotificationBox = (props: NotificationBoxProps) => {
  return (
    <div {...props}>
      <Icons src="IconNotification" useOutline useCursor />
    </div>
  );
};

const styles = stylex.create({
  nav: {
    position: 'relative',
    width: '100%',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px 0 24px',
    gap: '1rem',
    borderBottomColor: palette.whiteSoftGray,
    borderBottomStyle: 'solid',
    borderBottomWidth: spacing.xxsmall,
  },
  airportsLayoutTitle: {
    flex: '1',
    fontSize: '2rem',
    fontWeight: 400,
  },
});
