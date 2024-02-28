'use client';

import '@/hooks/useInjectStyleX';
import * as stylex from '@stylexjs/stylex';
import { SearchForm } from './search/SearchForm';
import { LocaleSwitcher } from './localeConvert/LocaleSwitcher';
import { EditIcon, NotificationIcon } from '@/components/atoms/Icon';
import { useCurrentPath } from '@/hooks/useCurrentPath';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { ComponentPropsWithoutRef } from 'react';

type NavProps = React.ComponentPropsWithoutRef<'nav'>;
type PageTitleProps = ComponentPropsWithoutRef<'h1'>;
type NavGlobalEditBoxProps = React.ComponentPropsWithoutRef<'div'>;
type NotificationBoxProps = React.ComponentPropsWithoutRef<'div'>;

export const Nav = (props: NavProps) => {
  const { isCurrentPage } = useCurrentPath();
  const t = useTranslatedWord('nav');
  return (
    <nav {...stylex.props(styles.nav)}>
      {isCurrentPage('airports') ? (
        <PageTitle>{t('pageTitle.airports')}</PageTitle>
      ) : isCurrentPage('airlines') ? (
        <PageTitle>{t('pageTitle.airlines')}</PageTitle>
      ) : (
        <SearchForm />
      )}
      <LocaleSwitcher />
      <NavGlobalEditBox />
      <NotificationBox />
    </nav>
  );
};

const PageTitle = (props: PageTitleProps) => {
  return <h1 {...stylex.props(styles.pageTitle)} {...props} />;
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
  pageTitle: {
    flex: 'auto',
    fontSize: '2rem',
  },
});
