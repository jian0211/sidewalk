'use client';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import Link from 'next/link';
import '@/hooks/useInjectStyleX';

type LogoProps = React.ComponentProps<'div'>;
type SidebarContainerProps = React.ComponentProps<'aside'>;
type SidebarTitleProps = React.ComponentProps<'h2'>;
type SidebarMenuContainerProps = React.ComponentProps<'div'>;
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
      <ul>{children}</ul>
    </div>
  );
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
      <Link href={href}>{text}</Link>
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
  },
  logo: {
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accodion: {
    // [TODO]:anmation
    backgroundColor: {
      default: 'Inherit',
      ':hover': '#F0F0F7',
    },
    height: {
      default: '4rem',
      ':hover': 'auto',
    },
    overflow: 'hidden',
    transition: 'height 1 ease-in-out',
  },
  toggle: {
    display: 'block',
    backgroundColor: '#F0F0F7',
  },
  title: {
    padding: `1rem 2rem`,
    backgroundColor: {
      default: 'Inherit',
      ':hover': '#F0F0F7',
    },
  },
  accordionMenu: {
    listStyleType: 'none',
    padding: '0 4rem',
  },
  menuContainer: {
    // [TODO]: scroll 追加
    height: '100%',
  },
});
