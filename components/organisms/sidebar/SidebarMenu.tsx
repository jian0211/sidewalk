'use client';

import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import '@/hooks/useInjectStyleX';

type LogoProps = React.ComponentProps<'div'>;
type SidebarContainerProps = React.ComponentProps<'aside'>;
type SidebarTitleProps = React.ComponentProps<'h2'>;
type SidebarMenuContainerProps = React.ComponentProps<'div'>;
type AccodionMenuContainerProps = React.ComponentProps<'ul'>;
type AccordionProps = React.ComponentProps<'div'> & {
  title: string;
  current: boolean;
};
type LinkProps = React.ComponentProps<'li'> & {
  href: `${string}${
    | '/airports'
    | '/airports/schedule'
    | '/airlines'
    | '/airlines/schedule'}`;
  text: string;
  current: boolean;
};
type HomeLinkProps = React.ComponentProps<'div'> & {
  title: string;
  current: boolean;
};

export const SidebarContainer = (props: SidebarContainerProps) => {
  return <aside {...stylex.props(styles.sidebarContainer)} {...props} />;
};

export const SidebarAccordion = (props: AccordionProps) => {
  const { current, title, children, ...rest } = props;

  return (
    <div
      {...stylex.props(styles.sideAccodion, current && styles.currentPage)}
      {...rest}
    >
      <SidebarTitle>{title}</SidebarTitle>
      <AccodionMenuContainer>{children}</AccodionMenuContainer>
    </div>
  );
};

const AccodionMenuContainer = (props: AccodionMenuContainerProps) => {
  return <ul {...stylex.props(styles.accordionMenuContainer)} {...props} />;
};

export const Logo = (props: LogoProps) => {
  return (
    <div {...stylex.props(styles.logo)} {...props}>
      <h1>SIDE WORK 修正予定</h1>
    </div>
  );
};

export const AccordionMenu = (props: LinkProps) => {
  const { current, href, text, ...rest } = props;
  return (
    <li {...stylex.props(styles.accordionMenu)} {...rest}>
      <Link
        {...stylex.props(styles.link, current && styles.currentPath)}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};

export const HomeLink = (props: HomeLinkProps) => {
  return (
    <div {...stylex.props(styles.homeBox)}>
      <Link
        {...stylex.props(styles.homeLink, props.current && styles.currentPath)}
        href="/"
      >
        <SidebarTitle>{props.title}</SidebarTitle>
      </Link>
    </div>
  );
};

export const SidebarMenuContainer = (props: SidebarMenuContainerProps) => {
  return <div {...stylex.props(styles.menuContainer)} {...props} />;
};

export const SidebarTitle = (props: SidebarTitleProps) => {
  return <h2 {...stylex.props(styles.title)} {...props} />;
};

const styles = stylex.create({
  sidebarContainer: {
    width: '100%',
    maxWidth: '20rem',
    height: '100vh',
    backgroundColor: '#F5F5F9',
    display: 'flex',
    flexDirection: 'column',
    color: '#7F8695',
  },
  logo: {
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'tomato',
  },
  sideAccodion: {
    // [TODO]: height transition 追加
    backgroundColor: {
      default: 'Inherit',
      ':hover': '#F0F0F7',
    },
    height: {
      default: '4rem',
      ':hover': 'fit-content',
    },
    overflow: 'hidden',
  },
  toggle: {
    display: 'block',
    backgroundColor: '#F0F0F7',
  },
  title: {
    padding: `1rem 2rem`,
    height: '4rem',
    fontSize: '1rem',
    backgroundColor: {
      default: 'Inherit',
      ':hover': '#F0F0F7',
    },
  },
  accordionMenu: {
    color: {
      default: 'red',
      ':hover': 'pink',
    },
  },
  menuContainer: {
    // [TODO]: scroll 追加
    height: '100%',
  },
  accordionMenuContainer: {},
  link: {
    display: 'block',
    padding: '0.6rem 4rem',
    width: '100%',
    color: {
      default: '#9AA0AD',
      ':hover': '#28176D',
      ':active': '#28176D',
    },
  },
  currentPage: {
    backgroundColor: '#F0F0F7',
    height: 'fit-content',
    overflow: 'visible',
    color: '#28176D',
  },
  currentPath: {
    color: '#28176D',
  },
  homeLink: {
    display: 'block',
    color: {
      default: '#9AA0AD',
      ':hover': '#28176D',
      ':active': '#28176D',
    },
  },
  homeBox: {
    height: '4rem',
  },
});
