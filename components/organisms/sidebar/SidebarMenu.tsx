'use client';

import * as stylex from '@stylexjs/stylex';
import '@/hooks/useInjectStyleX';

type LogoProps = React.ComponentPropsWithoutRef<'div'>;
type SidebarContainerProps = React.ComponentPropsWithoutRef<'aside'>;
type SidebarMenuContainerProps = React.ComponentPropsWithoutRef<'div'>;
type SidebarAccordionProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string;
  isCurrent: boolean;
};
type SidebarBottomContainerProps = React.ComponentPropsWithoutRef<'div'>;
type SidebarFooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const SidebarContainer = (props: SidebarContainerProps) => {
  return <aside {...stylex.props(styles.sidebarContainer)} {...props} />;
};

export const Logo = (props: LogoProps) => {
  return (
    <div {...stylex.props(styles.logo)} {...props}>
      <h1>SIDE WORK 修正予定</h1>
    </div>
  );
};

export const SidebarMenuContainer = (props: SidebarMenuContainerProps) => {
  return <div {...stylex.props(styles.menuContainer)} {...props} />;
};

export const SidebarAccordion = ({
  isCurrent,
  title,
  children,
  ...props
}: SidebarAccordionProps) => {
  return (
    <div
      {...stylex.props(styles.sideAccodion, isCurrent && styles.currentPath)}
      {...props}
    >
      <h2 {...stylex.props(styles.title)} {...props}>
        {title}
      </h2>
      <ul style={{ paddingBottom: '1rem' }}>{children}</ul>
    </div>
  );
};

export const SidebarBottomContainer = (props: SidebarBottomContainerProps) => {
  return <div {...stylex.props(styles.bottomContainer)} {...props} />;
};

export const SidebarFooter = (props: SidebarFooterProps) => {
  return <footer {...stylex.props(styles.footer)} {...props} />;
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
    // [TODO]:border 共通部品に移動
    borderBottomWidth: {
      default: 'none',
      ':hover': '1px',
    },
    borderBottomStyle: {
      default: 'none',
      ':hover': 'solid',
    },
    borderBottomColor: {
      default: 'none',
      ':hover': '#28176D',
    },
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
  menuContainer: {
    // [TODO]: scroll 追加
    height: '100%',
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  currentPath: {
    color: '#28176D',
  },
  footer: {
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
