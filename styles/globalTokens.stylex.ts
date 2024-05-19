import * as stylex from '@stylexjs/stylex';

/**
 * default Style Options
 */

export type DirectionOption = 'Left' | 'Right' | 'Top' | 'Bottom';

export type RemLevelOpton = `${0 | 1 | 2 | 3 | 4 | 5 | 6}rem`;

export type PaddingProps = Partial<{
  [k in `padding${DirectionOption}`]?: PixelLevelOption;
}>;
export type MarginProps = Partial<{
  [k in `margin${DirectionOption}`]?: PixelLevelOption;
}>;

const paletteProperties = {
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
  default: 'currentcolor',
  inherit: 'inherit',
  japanRed: '#BC002D',
  koreaBlue: '#003478',
  baseGray: '#cdcdcd',
} as const;

export type PaletteVars = keyof typeof paletteProperties;
export const palette = stylex.defineVars(paletteProperties);
export type Range = `${number}${'px' | 'rem'}` | 'auto';
export type PixelLevelOption =
  | `${
      | 0
      | 2
      | 4
      | 6
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
  | '1vw'
  | 'auto'
  | 'fit-content';
export type SizeOption =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'auto'
  | 'fitContent'
  | 'vw';

export const spacing = stylex.defineVars<Record<SizeOption, PixelLevelOption>>({
  none: '0px',
  xxsmall: '2px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '50px',
  vw: '1vw',
  auto: 'auto',
  fitContent: 'fit-content',
});

export const flexItem = stylex.defineVars({
  start: 'start',
  center: 'center',
  end: 'end',
  'space-evenly': 'space-evenly',
  'space-around': 'space-around',
  'space-between': 'space-between',
  stretch: 'stretch',
  'flex-start': 'flex-start',
});

export const flexDirection = stylex.defineVars({
  row: 'row',
  column: 'column',
});

export const fontProperties = {
  size: {
    xxsmall: '0.75rem',
    xsmall: '0.875rem',
    small: '1rem',
    medium: '1.25rem',
    large: '1.5rem',
    xlarge: '1.8rem',
    xxlarge: '3rem',
  },
  weight: {
    light: '300',
    normal: '400',
    medium: '500',
    bold: '600',
  },
} as const;

export const fontSizing = stylex.defineVars(fontProperties.size);

export const fontWeight = stylex.defineVars(fontProperties.weight);

export type FlexVars = {
  display?: 'flex';
  flex?: `${0 | 1 | 2 | 3 | 4 | 5}`;
  flexDirection?: 'row' | 'column';
  gap?: SizeOption;
  alignItems?: 'start' | 'center' | 'end';
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | `space-${'evenly' | 'around' | 'between'}`;
};
export const flexing: stylex.VarGroup<FlexVars> = stylex.defineVars({
  display: 'flex',
  flex: '0',
  flexDirection: 'row',
  alignItems: 'start',
  justifyContent: 'start',
});

export const shadowing = stylex.defineVars({
  none: 'none',
  basic:
    'rgba(42, 131, 255, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  dug: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
  swell:
    'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
});

export type SizeVars = {
  width?: `${string}${'px' | 'rem' | '%'}` | 'fit-content' | 'auto';
  height?: `${string}${'px' | 'rem' | '%'}` | 'fit-content' | 'auto';
};
export const sizing: stylex.VarGroup<SizeVars> = stylex.defineVars({
  width: '0px',
  height: '0px',
});

type NumberTable = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const countryColor = stylex.defineVars({
  none: 'none',
  basic:
    'rgba(42, 131, 255, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  dug: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
  swell:
    'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
});
