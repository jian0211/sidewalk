'use client';

import * as stylex from '@stylexjs/stylex';
import { ReactElement, useEffect, useState } from 'react';
import { useToggle } from '../templates/useToggle';
import '@/hooks/useInjectStyleX';

type AccordionProps = {
  title: string;
  children: ReactElement[];
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [onToggle, setOnToggle] = useState(false);
  const handleClick = () => setOnToggle((prev) => !prev);

  return (
    <div {...stylex.props(styles.accodion, onToggle && styles.toggle)}>
      <h2 onClick={handleClick}>{title}</h2>
      {onToggle && <ul>{children}</ul>}
    </div>
  );
};

export default Accordion;

const styles = stylex.create({
  accodion: {
    padding: ' 0 2rem',
  },
  toggle: {
    backgroundColor: '#F0F0F7',
  },
});
