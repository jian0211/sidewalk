'use client';

import '@/hooks/useInjectStyleX';
import * as stylex from '@stylexjs/stylex';
import { SearchForm } from './search/SearchForm';
import { LocaleSwitcher } from './localeConvert/LocaleSwitcher';

type NavProps = React.ComponentPropsWithoutRef<'nav'>;
type NavGlobalEditBoxProps = React.ComponentPropsWithoutRef<'div'>;
type NotificationBoxProps = React.ComponentPropsWithoutRef<'div'>;

export const Nav = (props: NavProps) => {
  return (
    <nav {...stylex.props(styles.nav)}>
      <SearchForm />
      <LocaleSwitcher />
      <NavGlobalEditBox />
      <NotificationBox />
    </nav>
  );
};

const NavGlobalEditBox = (props: NavGlobalEditBoxProps) => {
  return <div>Global Edit Button</div>;
};

const NotificationBox = (props: NotificationBoxProps) => {
  return <div>notification Box</div>;
};

const styles = stylex.create({
  nav: {
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
  },
});
