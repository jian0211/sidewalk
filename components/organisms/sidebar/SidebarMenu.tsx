import * as stylex from '@stylexjs/stylex';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import { IconNames, Icons } from '@/components/atoms/Icon';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Block } from '@/components/atoms/Block';
import { designStyles } from '@/components/styles';

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
  <aside
    {...props}
    {...stylex.props(
      styles.container,
      designStyles['flex']({ flexDirection: 'column' }),
      designStyles['size']({ width: '320px', height: '100vh' }),
      designStyles['bgColor']({ color: 'whiteGray' }),
      designStyles['padding']({
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '32px',
        paddingRight: '32px',
      }),
    )}
  />
);

const MenuContainer = (props: MenuContainerProps) => (
  <div
    {...props}
    {...stylex.props(
      designStyles['flex']({ flexDirection: 'column', gap: '8px' }),
      designStyles['size']({ height: '100%' }),
    )}
  />
);

const BottomContainer = (props: BottomContainerProps) => (
  <div
    {...props}
    {...stylex.props(
      designStyles['size']({ width: '100%' }),
      designStyles['margin']({ marginTop: 'auto' }),
    )}
  />
);

const Footer = (props: FooterProps) => (
  <footer
    {...props}
    {...stylex.props(
      designStyles['size']({ height: '7rem' }),
      designStyles['flex']({ alignItems: 'center', justifyContent: 'center' }),
    )}
  />
);

const Logo = (props: LogoProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        designStyles['size']({ height: '10rem' }),
        designStyles['flex']({
          alignItems: 'center',
          justifyContent: 'center',
        }),
        designStyles['color']({ color: 'lightBlue' }),
      )}
    >
      <h1>WWWWWW</h1>
    </div>
  );
};

const TabMenu = (props: TabMenuProps) => {
  const { iconname, linkProps, title, children, isCurrent, ...rest } = props;

  return (
    <Link href={linkProps.href}>
      <div
        {...rest}
        {...stylex.props(
          designStyles['radius']({
            borderTopRightRadius: '12px',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            borderTopLeftRadius: '12px',
          }),
          designStyles['border']({
            borderColor: 'transparent',
            hoverColor: 'lightBlue',
            borderWidth: '2px',
          }),
          designStyles['size']({ width: '100%', height: '4rem' }),
          designStyles['bgColor']({
            color: isCurrent ? 'lightBlue' : 'whiteGray',
          }),
          designStyles['color']({
            color: isCurrent ? 'baseWhite' : 'darkGray',
          }),
          designStyles['padding']({
            paddingTop: '0px',
            paddingRight: '16px',
            paddingBottom: '0px',
            paddingLeft: '16px',
          }),
          designStyles['flex']({
            alignItems: 'center',
            justifyContent: 'start',
            gap: '1rem',
          }),
        )}
      >
        <Icons src={iconname} />
        <span
          {...stylex.props(
            designStyles['font']({ fontSize: 'small', fontWeight: 'bold' }),
            designStyles['color']({
              color: 'default',
            }),
          )}
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
        styles.accodion,
        isCurrent && designStyles['size']({ height: 'fit-content' }),
        designStyles['radius']({
          borderTopRightRadius: '12px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          borderTopLeftRadius: '12px',
        }),
        designStyles['shadow']({ hoverShadow: 'basic' }),
      )}
    >
      <div
        {...stylex.props(
          designStyles['radius']({
            borderTopRightRadius: '12px',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            borderTopLeftRadius: '12px',
          }),
          designStyles['border']({
            borderColor: 'transparent',
            hoverColor: 'lightBlue',
            borderWidth: '2px',
          }),
          designStyles['size']({ width: '100%', height: '4rem' }),
          designStyles['padding']({
            paddingTop: '0px',
            paddingRight: '16px',
            paddingBottom: '0px',
            paddingLeft: '16px',
          }),
          designStyles['flex']({
            alignItems: 'center',
            justifyContent: 'start',
            gap: '1rem',
          }),
          designStyles['color']({ color: 'darkGray' }),
        )}
      >
        <Icons src={iconname} />
        <h2
          {...stylex.props(
            designStyles['font']({ fontSize: 'small', fontWeight: 'bold' }),
            designStyles['color']({ color: 'default' }),
          )}
        >
          {title}
        </h2>
      </div>
      <Block
        theme="variant"
        flex={{
          flexDirection: 'column',
          gap: '8px',
        }}
        margin={{
          marginTop: '0px',
          marginRight: '16px',
          marginBottom: '16px',
          marginLeft: '32px',
        }}
      >
        {children}
      </Block>
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
    maxWidth: '320px',
    minWidth: '320px',
    borderRightColor: palette.whiteSoftGray,
    borderRightStyle: 'solid',
    borderRightWidth: spacing.xxsmall,
  },
  accodion: {
    height: {
      default: '4rem',
      ':hover': 'fit-content',
    },
    overflow: 'hidden',
  },
});
