import {
  DropdownControllContextProvider,
  useDropdown,
} from '@/hooks/providers/ModalOpenControllProvider';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import React, { Children } from 'react';

type DropdownProps = DropdownWarpperProps;
export type DropdownWarpperProps = React.ComponentPropsWithRef<'div'> & {
  style?: StyleXArray<any>;
};

export const Dropdown = (props: DropdownProps) => {
  return (
    <DropdownControllContextProvider>
      <DropdownWarpper {...props} />
    </DropdownControllContextProvider>
  );
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
  const { isShow, setIsShow } = useDropdown();
  const ref = useOutsideClick<HTMLDivElement>(() => {
    setIsShow((prev) => (prev === true ? false : prev));
  });

  const handleClick = () => {
    setIsShow((prev) => !prev);
    console.log('Clicked!');
  };

  return (
    <div {...stylex.props(styles.warpper, style)} ref={ref} {...props}>
      <div onClick={handleClick}>{firstChild}</div>
      {isShow && <div {...stylex.props(styles.secondChild)}>{secondChild}</div>}
    </div>
  );
};

const styles = stylex.create({
  warpper: {
    position: 'relative',
    width: 'inherit',
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  secondChild: {
    position: 'absolute',
    top: 'calc(100% + 1rem)',
    left: 0,
  },
});
