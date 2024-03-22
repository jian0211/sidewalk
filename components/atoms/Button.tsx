import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import React from 'react';
import { FindIcon } from '@/components/atoms/Icon';
import { Padding } from '@/styles/globalTokens.style';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  style?: StyleXArray<any>;
  hasHoverBorder?: boolean;
  isSelected?: boolean;
  type?: 'button' | 'submit';
  paddingLevel?: Padding;
};

const DEFAULT_PADDING: Padding = {
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      style,
      hasHoverBorder,
      paddingLevel = DEFAULT_PADDING,
      type = 'button',
      isSelected,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        {...stylex.props(
          styles.button(paddingLevel),
          hasHoverBorder && styles.hoverBorder,
          isSelected && styles.selectedColor,
          style,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'BasicButton';

export const CloseButton = ({
  style,
  hasHoverBorder,
  paddingLevel = DEFAULT_PADDING,
  type = 'button',
  isSelected,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...stylex.props(
        styles.button(paddingLevel),
        hasHoverBorder && styles.hoverBorder,
        isSelected && styles.selectedColor,
        style,
      )}
      {...props}
    >
      X
    </button>
  );
};

export const SearchButton = ({
  style,
  hasHoverBorder,
  paddingLevel = DEFAULT_PADDING,
  type = 'submit',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...stylex.props(
        styles.button(paddingLevel),
        hasHoverBorder && styles.hoverBorder,
        style,
      )}
      {...props}
    >
      <FindIcon />
    </button>
  );
};

const styles = stylex.create({
  button: (p: Padding) => ({
    paddingBottom: p.paddingBottom,
    paddingTop: p.paddingTop,
    paddingLeft: p.paddingLeft,
    paddingRight: p.paddingRight,
    borderColor: 'none',
    borderWidth: 'none',
    borderStyle: 'none',
    background: 'none',
    cursor: 'pointer',
    height: '3rem',
  }),
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
