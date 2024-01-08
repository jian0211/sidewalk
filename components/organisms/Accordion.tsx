'use client';

import { ReactElement, useState } from 'react';

type AccordionProps = {
  title: string;
  children: ReactElement[];
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [onToggle, setOnToggle] = useState(false);

  const handleClick = () => setOnToggle((prev) => !prev);

  return (
    <div>
      <h2 onClick={handleClick}>{title}</h2>
      {onToggle && <ul>{children}</ul>}
    </div>
  );
};

export default Accordion;
