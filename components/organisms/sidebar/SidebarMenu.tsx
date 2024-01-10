'use client';

import * as stylex from '@stylexjs/stylex';
import { ReactNode, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import '@/hooks/useInjectStyleX';

type LogoProps = React.ComponentProps<'div'>;
type SidebarContainerProps = React.ComponentProps<'aside'>;
type SidebarTitleProps = React.ComponentProps<'h2'>;
type SidebarMenuContainerProps = React.ComponentProps<'div'>;
type AccodionMenuContainerProps = React.ComponentProps<'ul'>;
type AccordionProps = React.ComponentProps<'div'> & {
  title: string;
  isCurrentPage: boolean;
};
type AccordionMenuProps = {
  href: `${string}${
    | '/airports'
    | '/airports/schedule'
    | '/airlines'
    | '/airlines/schedule'}`;
  text: string;
};

export const SidebarContainer = (props: SidebarContainerProps) => {
  return <aside {...stylex.props(styles.sidebarContainer)} {...props} />;
};

export const SidebarAccordion = ({
  title,
  isCurrentPage,
  children,
}: AccordionProps) => {
  const [onToggle, setOnToggle] = useState(false);
  const handleClick = () => {
    // setOnToggle((prev) => !prev);
  };
  return (
    <div {...stylex.props(styles.accodion)}>
      <SidebarTitle onClick={handleClick}>{title}</SidebarTitle>
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

export const AccordionMenu = ({ text, href }: AccordionMenuProps) => {
  return (
    <li {...stylex.props(styles.accordionMenu)}>
      <Link {...stylex.props(styles.link)} href={href}>
        {text}
      </Link>
    </li>
  );
};

export const SidebarMenuContainer = (props: SidebarMenuContainerProps) => {
  return <div {...stylex.props(styles.menuContainer)} {...props} />;
};

export const SidebarTitle = ({ children, ...props }: SidebarTitleProps) => {
  return (
    <h2 {...stylex.props(styles.title)} {...props}>
      {children}
    </h2>
  );
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
  accodion: {
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
    padding: '0.6rem 4rem',
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
    color: {
      default: '#9AA0AD',
      ':hover': 'black',
      ':active': 'black',
    },
  },
});
