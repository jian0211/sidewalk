import { RemLevelOpton } from '../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';
import {
  StateBasedProps,
  StatusProps,
  designStyles,
  frameThemes,
  stateBasedstyles,
  statusStyles,
} from '../styles';
import { Prettier } from '@/types/common';

type BlockCssProps = Prettier<
  Pick<StateBasedProps, 'useHover'> & Pick<StatusProps, 'isSelected'>
>;
type CustomBoxProps = {
  variant?: 'round' | 'square';
  useAccordion?: {
    defaultHeight: RemLevelOpton;
    height: 'fit-content' | RemLevelOpton;
  };
  stylesprops?: stylex.StyleXStyles;
  theme?: 'borderTheme';
} & BlockCssProps &
  ComponentProps<'div'>;

export const Block = (props: CustomBoxProps) => {
  const {
    variant,
    useHover,
    isSelected,
    useAccordion,
    stylesprops,
    theme,
    ...rest
  } = props;
  return (
    <div
      {...rest}
      {...stylex.props(
        styles.default,
        variant === 'round' && designStyles.radius('12px'),
        useHover && stateBasedstyles[useHover.type](useHover.props),
        isSelected && statusStyles['basicSelected'],
        useAccordion && styles.accodion(useAccordion),
        theme === 'borderTheme' && frameThemes.roundEdged,
        stylesprops,
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
});
