import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import React from 'react';
import { Icons, IconsProps } from '@/components/atoms/Icon';
import {
  DesignProps,
  StatusProps,
  designStyles,
  statusStyles,
} from '../styles';
import { Prettier } from '@/types/common';
import { PixelLevelOption } from '../../styles/globalTokens.stylex';

type ButtonCssProps = Prettier<
  Pick<
    DesignProps,
    | 'border'
    | 'flex'
    | 'radius'
    | 'padding'
    | 'size'
    | 'bgColor'
    | 'color'
    | 'font'
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      type = 'button',
      size,
      flex,
      border,
      radius,
      padding,
      isSelected,
      color,
      bgColor,
      font,
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
          designStyles['size']({
            width: size?.width ?? 'fit-content',
            height: size?.height ?? 'fit-content',
          }),
          padding && designStyles['padding'](padding),
          flex && designStyles['flex'](flex),
          border && designStyles['border'](border),
          radius && designStyles['radius'](radius),
          color && designStyles['color'](color),
          font &&
            designStyles['font']({
              fontSize: font.fontSize,
              fontWeight: font.fontWeight,
              textDecoration: font.textDecoration,
            }),
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

type RoundButtonProps = ButtonProps & {
  roundLevel?: PixelLevelOption;
};
export const RoundButton = ({ roundLevel, ...props }: RoundButtonProps) => {
  return (
    <Button
      radius={{
        borderBottomLeftRadius: roundLevel ?? '4px',
        borderBottomRightRadius: roundLevel ?? '4px',
        borderTopLeftRadius: roundLevel ?? '4px',
        borderTopRightRadius: roundLevel ?? '4px',
      }}
      {...props}
    />
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
