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
import { PixelLevelOption, palette } from '../../styles/globalTokens.stylex';

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
  theme?: keyof typeof themes;
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
      theme,
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
          size &&
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
          theme && themes[theme],
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

const themes = stylex.create({
  circle: {
    borderRadius: '100%',
    padding: '12px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: {
      default: palette['baseWhite'],
      ':hover': palette['lightBlue'],
    },
  },
  round: {
    borderRadius: '12px',
    padding: '12px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: {
      default: palette['baseWhite'],
      ':hover': palette['lightBlue'],
    },
  },
});
