import {
  RemLevelOpton,
  SizeOption,
  spacing,
} from '../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';
import {
  DesignProps,
  StatusProps,
  designStyles,
  frameThemes,
  statusStyles,
} from '../styles';
import { Prettier } from '@/types/common';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';

type BlockCssProps = Prettier<
  Pick<StatusProps, 'isSelected'> &
    Pick<
      DesignProps,
      'border' | 'color' | 'shadow' | 'flex' | 'margin' | 'size' | 'padding'
    >
>;

type CustomBoxProps = {
  useAccordion?: {
    defaultHeight: RemLevelOpton;
    height: 'fit-content' | RemLevelOpton;
  };
  style?: StyleXArray<any>;
  theme?: 'variant';
} & BlockCssProps &
  ComponentProps<'div'>;

export const Block = (props: CustomBoxProps) => {
  const {
    border,
    color,
    shadow,
    size,
    margin,
    isSelected,
    useAccordion,
    padding,
    style,
    theme,
    ...rest
  } = props;
  return (
    <div
      {...rest}
      {...stylex.props(
        styles.default,
        theme === 'variant' && frameThemes.roundEdged,
        color && designStyles['color'](color),
        size && designStyles['size'](size),
        border && designStyles['border'](border),
        shadow && designStyles['shadow'](shadow),
        margin && designStyles['margin'](margin),
        padding && designStyles['padding'](padding),
        isSelected && statusStyles['basicSelected'],
        useAccordion && styles.accodion(useAccordion),
        style,
      )}
    />
  );
};

const styles = stylex.create({
  default: {
    width: 'fit-content',
    height: 'fit-content',
  },
  accodion: (data: Required<CustomBoxProps['useAccordion']>) => ({
    height: {
      default: data?.defaultHeight,
      ':hover': data?.height,
    },
    overflow: 'hidden',
  }),
  roundLevel: (props: SizeOption) => ({
    borderRadius: spacing[props],
  }),
});
