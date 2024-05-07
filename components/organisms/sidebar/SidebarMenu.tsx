import * as stylex from '@stylexjs/stylex';
import {
  PaletteVars,
  fontWeight,
  palette,
  shadowing,
  spacing,
} from '../../../styles/globalTokens.stylex';
import { IconNames, Icons } from '@/components/atoms/Icon';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Block } from '@/components/atoms/Block';
import { designStyles } from '@/components/styles';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

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

const Logo = (props: LogoProps) => {
  return (
    <div {...props} {...stylex.props(styles.logo)}>
      <Image
        src={logo}
        alt="logo"
        width={300}
        style={{
          background: 'none',
        }}
      />
    </div>
  );
};

const MenuContainer = (props: MenuContainerProps) => (
  <div {...props} {...stylex.props(styles.menuContainer)} />
);

const BottomContainer = (props: BottomContainerProps) => (
  <div {...props} {...stylex.props(styles.bottomContainer)} />
);

const Footer = (props: FooterProps) => (
  <footer {...props} {...stylex.props(styles.footer)} />
);

const TabMenu = (props: TabMenuProps) => {
  const { iconname, linkProps, title, children, isCurrent, ...rest } = props;

  return (
    <Link href={linkProps.href} style={{ width: '100%', height: '4rem' }}>
      <div
        {...rest}
        {...stylex.props(
          styles.tabMenu({
            backgroundColor: isCurrent ? 'lightBlue' : 'whiteGray',
          }),
          styles.borderHover,
        )}
      >
        <Icons src={iconname} />
        <span
          {...stylex.props(styles.text(isCurrent ? 'baseWhite' : 'inherit'))}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

const Accordion = (props: AccordionProps) => {
  const { isCurrent, iconname, title, children, ...rest } = props;
  return (
    <div
      {...rest}
      {...stylex.props(
        styles.accodion(isCurrent ? 'fit-content' : '4rem'),
        styles.borderHover,
        isCurrent && styles.shadow,
      )}
    >
      <div {...stylex.props(styles.tabMenu({ backgroundColor: 'whiteGray' }))}>
        <Icons src={iconname} />
        <h2 {...stylex.props(styles.text('darkGray'))}>{title}</h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 1rem 0 2rem',
          gap: '0.5rem',
        }}
      >
        {children}
      </div>
    </div>
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

const styles = stylex.create({
  container: {
    zIndex: 10,
    width: '320px',
    maxWidth: '320px',
    minWidth: '320px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2rem',
    backgroundColor: palette.whiteGray,
    borderRightColor: palette.whiteSoftGray,
    borderRightStyle: 'solid',
    borderRightWidth: spacing.xxsmall,
  },
  tabMenu: (props: { backgroundColor: PaletteVars }) => ({
    width: '100%',
    height: '4rem',
    display: 'flex',
    flex: '4',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: palette[props.backgroundColor],
    padding: '0 1rem',
  }),
  accodion: (height) => ({
    height: {
      default: height,
      ':hover': 'fit-content',
    },
    overflow: 'hidden',
    boxShadow: {
      default: null,
      ':hover': shadowing.basic,
    },
    paddingBottom: '1rem',
  }),
  footer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '96px',
    minHeight: '96px',
    maxHeight: '96px',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
  },
  menuContainer: {
    flex: '4',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing['small'],
  },
  text: (color: PaletteVars) => ({
    fontSize: '1rem',
    fontWeight: fontWeight['bold'],
    color: palette[color],
  }),
  shadow: {
    boxShadow: shadowing.basic,
  },
  borderHover: {
    borderRadius: '1rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: {
      default: palette['whiteGray'],
      ':hover': palette['lightBlue'],
    },
  },
});
