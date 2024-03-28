import * as stylex from '@stylexjs/stylex';

/**
 * default Style Options
 */
type SizeOption =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'vw';
export type DirectionOption = 'Left' | 'Right' | 'Top' | 'Bottom';

export type PixelLevelOption =
  | `${
      | 0
      | 2
      | 4
      | 8
      | 10
      | 12
      | 14
      | 16
      | 18
      | 20
      | 22
      | 24
      | 26
      | 28
      | 30
      | 32
      | 50
      | 100
      | 150
      | 200}px`
  | '1vw';
export type RemLevelOpton = `${0 | 1 | 2 | 3 | 4 | 5 | 6}rem`;

type Spacing = Record<SizeOption, PixelLevelOption>;
export type Padding = Partial<{
  [k in `padding${DirectionOption}`]: PixelLevelOption;
}>;
export type PaletteKeys = keyof typeof palette;

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
  skyBlue: '#4ebffc',
  transparent: 'transparent',
});

export const spacing = stylex.defineVars<Spacing>({
  none: '0px',
  xxsmall: '2px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  vw: '1vw',
});

export const shadowing = stylex.defineVars({
  basic:
    'rgba(42, 131, 255, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
});

export const buttonThemeVars = stylex.defineVars<Spacing>({
  none: '0px',
  xxsmall: '2px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  vw: '1vw',
});
