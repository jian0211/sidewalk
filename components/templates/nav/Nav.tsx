'use client';

import '@/hooks/useInjectStyleX';
import { useLocale } from '@/hooks/useLocale';
import * as stylex from '@stylexjs/stylex';
import {
  SwapIcon,
  JapanFlagIcon,
  KoreaFlagIcon,
} from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { BookingButton } from '@/components/organisms/SearchBar/BookingButton';

type NavProps = React.ComponentPropsWithoutRef<'nav'>;
type SearchBarProps = React.ComponentPropsWithoutRef<'div'>;
type NavGlobalEditBoxProps = React.ComponentPropsWithoutRef<'div'>;
type LocaleSwitcherProps = React.ComponentPropsWithoutRef<'button'>;
type NotificationBoxProps = React.ComponentPropsWithoutRef<'div'>;

export const Nav = (props: NavProps) => {
  return (
    <nav {...stylex.props(styles.nav)}>
      <SearchBar />
      <LocaleSwitcher />
      <NavGlobalEditBox />
      <NotificationBox />
    </nav>
  );
};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div {...stylex.props(styles.searchBar)}>
      {/* 목적지 */}
      <div {...stylex.props(styles.bookingContainer)}>
        <BookingButton iata="HND" name="도쿄" />
        <SwapIcon />
        <BookingButton iata="INC" name="인천" />
      </div>
      <div>
        <span>왕복</span>
        <span>편도</span>
      </div>
      <div>
        <div>출발일</div>
        {/* <input type="date" defaultValue={'19930211'} /> */}
      </div>
      <div>
        <div>희망비용</div>
        {/* <input type="number" value="300" /> */}
      </div>
    </div>
  );
};
const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const {
    states: { locale },
    actions: { handleChangeLocale },
  } = useLocale();
  return (
    <Button
      {...stylex.props(styles.localeSwitcher)}
      onClick={() => handleChangeLocale()}
    >
      {locale === 'ja' ? (
        <>
          <JapanFlagIcon />
          <p>日本語</p>
        </>
      ) : (
        <>
          <KoreaFlagIcon />
          <p>한국어</p>
        </>
      )}
    </Button>
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
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
  },
  searchBar: {
    flex: '3',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: '1vw',
  },
  localeSwitcher: {
    // width: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    backgroundColor: 'whith',
  },
  bookingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16rem',
  },
});
