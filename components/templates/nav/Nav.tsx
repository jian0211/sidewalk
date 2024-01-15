'use client';

import '@/hooks/useInjectStyleX';
import { useLocale } from '@/hooks/useLocale';
import * as stylex from '@stylexjs/stylex';

type NavProps = React.ComponentProps<'nav'>;
type SearchBarProps = React.ComponentProps<'div'>;
type NavGlobalEditBoxProps = React.ComponentProps<'div'>;
type LocaleSwitcherProps = React.ComponentProps<'div'>;
type NotificationBoxProps = React.ComponentProps<'div'>;

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
      <div>
        <div>
          <p>HND</p>
          <p>도쿄</p>
        </div>
        <div> switch Icon </div>
        <div>
          <p>INC</p>
          <p>인천</p>
        </div>
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
    actions: { handleChangeLocale },
  } = useLocale();
  return (
    <div onClick={() => handleChangeLocale()}>
      <span>JA</span>
      <span>KO</span>
    </div>
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
    height: '7rem',
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
