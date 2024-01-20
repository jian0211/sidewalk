import { useOutsideClick } from '@/hooks/useOutsideClick';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import React, { Children, useState } from 'react';

export type DropdownWarpperProps = React.ComponentPropsWithRef<'div'> & {
  style?: StyleXArray<any>;
};

export const DropdownWarpper = ({
  children,
  style,
  ...props
}: DropdownWarpperProps) => {
  const childArray = Children.toArray(children);
  if (childArray.length !== 2) {
    throw new Error('このDropdownWarpperは 二つ以下のchildrenのみもらいます。');
  }
  const [firstChild, secondChild] = childArray;
  const [show, setShow] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => {
    setShow((prev) => (prev === true ? false : prev));
  });

  const handleClick = () => {
    setShow((prev) => !prev);
    console.log('Clicked!');
  };

  return (
    <div {...stylex.props(styles.warpper, style)} ref={ref} {...props}>
      <div style={styles.firstChild} onClick={handleClick}>
        {firstChild}
      </div>
      {show && <div style={styles.secondChild}>{secondChild}</div>}
    </div>
  );
};

const styles = stylex.create({
  warpper: {
    border: '1px solid red',
  },
  firstChild: {
    border: '1px solid red',
  },
  secondChild: {
    border: '1px solid red',
  },
});
