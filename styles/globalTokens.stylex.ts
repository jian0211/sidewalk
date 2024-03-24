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

export const palette = stylex.defineVars({
  baseWhite: '#FFFFFF',
  whiteGray: '#FAFBFB',
  whiteSoftGray: '#F4F4F4',
  softGray: '#E3E3E5',
  deepSky: '#86829D',
  darkGray: '#3C4963',
  darkBlue: '#OE1E3E',
  brightOrange: '#FE784A',
  purple: '#7439E8',
  brightGreen: '#23C55E',
  vividRed: '#E62437',
  mutedOlive: '#OEAD71',
  lightBlue: '#2A83FF',
});

export const spacing = stylex.defineVars<Spacing>({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
});

export const hovers = stylex.create({
  basicHover: (props: {
    color: keyof typeof palette;
    backgroundColor: keyof typeof palette;
  }) => ({
    color: {
      default: 'Inherit',
      ':hover': palette[props.color], // error になってるんですが、後で解決する。
    },
    backgroundColor: {
      default: 'Inherit',
      ':hover': palette[props.backgroundColor],
    },
  }),
});
