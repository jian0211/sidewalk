'use client';

import * as stylex from '@stylexjs/stylex';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useToggle } from '../templates/useToggle';
import '@/hooks/useInjectStyleX';

type AccordionProps = React.ComponentProps<'div'> & {
  title: string;
};

type SidebarTitleProps = React.ComponentProps<'h2'>;

export const SidebarAccordion = ({ title, children }: AccordionProps) => {
  const [onToggle, setOnToggle] = useState(false);
  const handleClick = () => {
    setOnToggle((prev) => !prev);
  };

  return (
    <div {...stylex.props(styles.accodion, onToggle && styles.toggle)}>
      <SidebarTitle onClick={handleClick}>{title}</SidebarTitle>
      {onToggle && <ul>{children}</ul>}
    </div>
  );
};

export const SidebarTitle = ({ children, ...props }: SidebarTitleProps) => {
  return (
    <h2 {...stylex.props(styles.title)} {...props}>
      {children}
    </h2>
  );
};

const styles = stylex.create({
  accodion: {
    padding: ' 0 2rem',
  },
  toggle: {
    backgroundColor: '#F0F0F7',
  },
  title: {
    paddingLeft: '2rem',
  },
});
