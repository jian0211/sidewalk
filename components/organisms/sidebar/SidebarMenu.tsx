import * as stylex from '@stylexjs/stylex';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import { IconNames, Icons } from '@/components/atoms/Icon';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Block } from '@/components/atoms/Block';

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
  iconname: IconNames;
};

const Container = (props: ContainerProps) => (
  <aside {...props} {...stylex.props(styles.container)} />
);

const MenuContainer = (props: MenuContainerProps) => (
  <div {...props} {...stylex.props(styles.menuContainer)} />
);

const BottomContainer = (props: BottomContainerProps) => (
  <div {...props} {...stylex.props(styles.bottomContainer)} />
);

const Footer = (props: FooterProps) => (
  <footer {...props} {...stylex.props(styles.footer)} />
);

const Logo = (props: LogoProps) => {
  return (
    <div {...props} {...stylex.props(styles.logo)}>
      <h1>WWWWWW</h1>
    </div>
  );
};

const TabMenu = (props: TabMenuProps) => {
  const { iconname, linkProps, title, children, isCurrent, ...rest } = props;

  return (
    <Link href={linkProps.href}>
      <Block
        {...rest}
        variant="round"
        useHover
        isSelected={isCurrent}
        stylesprops={[styles.tabMenu]}
      >
        <Icons src={iconname} />
        <span {...stylex.props(styles.title)}>{title}</span>
      </Block>
    </Link>
  );
};

const Accordion = (props: AccordionProps) => {
  const { isCurrent, iconname, title, children, ...rest } = props;
  return (
    <Block
      {...rest}
      variant="round"
      useHover
      useAccordion={{
        defaultHeight: '4rem',
        height: 'fit-content',
      }}
      stylesprops={isCurrent && styles.accordion}
    >
      <Block variant="round" stylesprops={styles.tabMenu}>
        <Icons src={iconname} />
        <h2 {...stylex.props(styles.title)}>{title}</h2>
      </Block>
      <Block variant="round" stylesprops={styles.accodionList}>
        {children}
      </Block>
    </Block>
  );
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
    color: palette.lightBlue,
  },
  title: {
    fontSize: '1rem',
    color: 'inherit',
    fontWeight: 600,
  },
  menuContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  footer: {
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabMenu: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '1rem',
    height: menuHeigth,
    padding: '0 1rem',
  },
  accodionList: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1rem 1rem 2rem',
    gap: '0.5rem',
  },
  accordion: {
    height: 'fit-content',
    borderRadius: '1.2rem',
    borderWidth: spacing['xsmall'],
    borderStyle: 'solid',
    borderBlockColor: palette.lightBlue,
    borderInlineColor: palette.lightBlue,
  },
});
