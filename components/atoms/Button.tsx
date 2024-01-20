import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import React from 'react';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  style?: StyleXArray<any>;
  hasHoverBorder?: boolean;
  isSelected?: boolean;
  type?: 'button' | 'submit';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ style, hasHoverBorder, type = 'button', isSelected, ...props }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        {...stylex.props(
          styles.button,
          hasHoverBorder && styles.hoverBorder,
          isSelected && styles.selectedColor,
          style,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export const CloseButton = () => {
  return <Button>X</Button>;
};

const styles = stylex.create({
  button: {
    padding: 0,
    borderColor: 'none',
    borderWidth: 'none',
    borderStyle: 'none',
    background: 'none',
  },
  hoverBorder: {
    borderColor: {
      default: 'none',
      ':hover': '#00256C',
    },
    borderWidth: {
      default: 'none',
      ':hover': '1px',
    },
    borderStyle: {
      default: 'none',
      ':hover': 'solid',
    },
    borderRadius: '1vw',
  },
  selectedColor: {
    backgroundColor: '#00256C',
    color: 'white',
  },
});
