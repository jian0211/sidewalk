import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import React from 'react';
import { Icons, IconsProps } from '@/components/atoms/Icon';
import { Padding } from '../../styles/globalTokens.stylex';
import {
  DesignProps,
  StatusProps,
  designStyles,
  statusStyles,
} from '../styles';
import { Prettier } from '@/types/common';

type ButtonCssProps = Prettier<
  Pick<
    DesignProps,
    'hasBorder' | 'hasFlex' | 'hasRadius' | 'paddingLevel' | 'size'
  > &
    Pick<StatusProps, 'isSelected'>
>;

export type ButtonProps = {
  type?: 'button' | 'submit';
  style?: StyleXArray<any>;
} & ButtonCssProps &
  React.ComponentPropsWithoutRef<'button'>;

export type IconButtonProps = ButtonProps & {
  iconProps: IconsProps;
};

const DEFAULT_PADDING: Padding = {
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      type = 'button',
      size,
      hasFlex,
      hasBorder,
      hasRadius,
      paddingLevel = DEFAULT_PADDING,
      isSelected,
      style,
      ...rest
    } = props;

    return (
      <button
        {...rest}
        type={type}
        ref={ref}
        {...stylex.props(
          styles.button,
          designStyles.customBox(paddingLevel, size),
          hasFlex && designStyles['flex'],
          hasBorder && designStyles['border'](hasBorder),
          hasRadius && designStyles['radius'](hasRadius),
          isSelected && statusStyles['basicSelected'],
          style,
        )}
      />
    );
  },
);
Button.displayName = 'BasicButton';

export const IconButton = (props: IconButtonProps) => {
  const { iconProps, children, ...rest } = props;
  return (
    <Button {...rest}>
      <Icons src={iconProps['src']} width={iconProps['width']} />
      {children}
    </Button>
  );
};

const styles = stylex.create({
  button: {
    borderColor: 'none',
    borderWidth: 'none',
    borderStyle: 'none',
    background: 'none',
    cursor: 'pointer',
  },
});
