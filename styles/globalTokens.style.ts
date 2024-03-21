import * as stylex from '@stylexjs/stylex';

/**
 * default Style Options
 */
type SizeOption = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type DirectionOption = 'Left' | 'Right' | 'Top' | 'Bottom';
type PixelLevelOption = '0px' | '4px' | '8px' | '12px' | '20px' | '32px';

type Spacing = Record<SizeOption, PixelLevelOption>;
export type Padding = Partial<{
  [k in `padding${DirectionOption}`]: PixelLevelOption;
}>;

const colors = {
  baseWhite: '#FFFFFF',
};

export const defaultStyle = stylex.defineVars({
  backgroundColor: '#FFFFFF',
});

export const spacing = stylex.defineVars<Spacing>({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
});
