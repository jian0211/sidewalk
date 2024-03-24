import * as stylex from '@stylexjs/stylex';
import { hovers, palette, spacing } from '../../../styles/globalTokens.stylex';
import { PathName } from '@/types/path';
import { Icons } from '@/components/atoms/Icon';
import React from 'react';
import Link, { LinkProps } from 'next/link';

type LogoProps = React.ComponentPropsWithoutRef<'div'>;
type ContainerProps = React.ComponentPropsWithoutRef<'aside'>;
type MenuContainerProps = React.ComponentPropsWithoutRef<'div'>;
type AccordionProps = React.ComponentPropsWithoutRef<'div'> & SidebarUsedTypes;
type BottomContainerProps = React.ComponentPropsWithoutRef<'div'>;
type FooterProps = React.ComponentPropsWithoutRef<'footer'>;
type TabMenuProps = React.ComponentPropsWithoutRef<'div'> &
  SidebarUsedTypes & {
    linkProps: LinkProps;
  };

type SidebarUsedTypes = {
  title: string;
  isCurrent?: boolean;
  menutype: PathName | 'airlineList' | 'airportsList' | 'profile' | 'login';
};

const MenuIcons: Record<SidebarUsedTypes['menutype'], React.ReactElement> = {
  home: Icons('IconDashborad'),
  airlines: Icons('IconPlane'),
  airlineList: Icons('IconPlaneList'),
  airports: Icons('IconAirport'),
  airportsList: Icons('IconAirportList'),
  flights: Icons('IconFlight'),
  profile: Icons('IconProfile'),
  login: Icons('IconLogin'),
};

const Container = (props: ContainerProps) => {
  return <aside {...props} {...stylex.props(styles.container)} />;
};

const Logo = (props: LogoProps) => {
  return (
    <div {...props} {...stylex.props(styles.logo)}>
      <h1>SIDE WORK</h1>
    </div>
  );
};

const TabMenu = (props: TabMenuProps) => {
  const { menutype, linkProps, title, children, isCurrent, ...rest } = props;
  return (
    <div
      {...rest}
      {...stylex.props(
        styles.tabMenu,
        hovers.basicHover({ backgroundColor: 'lightBlue', color: 'baseWhite' }),
      )}
    >
      {MenuIcons[menutype]}
      <Link {...stylex.props(styles.title)} href={linkProps.href}>
        {title}
      </Link>
    </div>
  );
};

const MenuContainer = (props: MenuContainerProps) => {
  return <div {...props} {...stylex.props(styles.menuContainer)} />;
};

const Accordion = (props: AccordionProps) => {
  const { isCurrent, menutype, title, children, ...rest } = props;
  return (
    <div
      {...rest}
      {...stylex.props(styles.accodion, isCurrent && styles.currentPath)}
    >
      <div
        {...stylex.props(
          styles.tabMenu,
          hovers.basicHover({
            backgroundColor: 'lightBlue',
            color: 'baseWhite',
          }),
        )}
      >
        {MenuIcons[menutype]}
        <h2 {...props} {...stylex.props(styles.title)}>
          {title}
        </h2>
      </div>
      <ul {...stylex.props(styles.accodionList)}>{children}</ul>
    </div>
  );
};

const BottomContainer = (props: BottomContainerProps) => {
  return <div {...props} {...stylex.props(styles.bottomContainer)} />;
};

const Footer = (props: FooterProps) => {
  return <footer {...props} {...stylex.props(styles.footer)} />;
};

export const SidebarMenu = {
  Container,
  Logo,
  TabMenu,
  MenuContainer,
  Accordion,
  BottomContainer,
  Footer,
};

const sidebarWidth = '320px';
const menuHeigth = '4rem';

const styles = stylex.create({
  container: {
    width: sidebarWidth,
    maxWidth: sidebarWidth,
    minWidth: sidebarWidth,
    height: '100vh',
    backgroundColor: palette.whiteGray,
    display: 'flex',
    flexDirection: 'column',
    borderRightColor: palette.whiteSoftGray,
    borderRightStyle: 'solid',
    borderRightWidth: spacing.xsmall,
    padding: '0 2rem',
    color: palette.darkGray,
  },
  logo: {
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'tomato',
  },
  accodion: {
    height: {
      default: menuHeigth,
      ':hover': 'fit-content',
    },
    overflow: 'hidden',
  },
  title: {
    fontSize: '1rem',
    color: 'inherit',
    fontWeight: 600,
  },
  menuContainer: {
    // [TODO]: scroll 追加
    height: '100%',
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  currentPath: {
    color: palette.baseWhite,
    // backgroundColor: 'pink',
  },
  footer: {
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '1rem',
    height: menuHeigth,
    padding: '0 1rem',
    borderRadius: '1rem',
  },
  accodionList: {
    marginLeft: '2rem',
  },
});
