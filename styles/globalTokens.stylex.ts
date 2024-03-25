import * as stylex from '@stylexjs/stylex';

/**
 * default Style Options
 */
type SizeOption = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type DirectionOption = 'Left' | 'Right' | 'Top' | 'Bottom';
type PixelLevelOption = '0px' | '4px' | '8px' | '12px' | '20px' | '32px';
export type RemLevelOpton = '0' | '1rem' | '2rem' | '3rem' | '4rem' | '5rem';

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
type FilterColorProps = keyof Pick<typeof palette, 'darkGray' | 'baseWhite'>;

const filterColor: Record<FilterColorProps, string> = {
  darkGray:
    'brightness(0) saturate(100%) invert(27%) sepia(23%) saturate(673%) hue-rotate(181deg) brightness(94%) contrast(93%)',
  baseWhite:
    'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(281deg) brightness(103%) contrast(101%)',
};

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
  borderHover: (props: {
    borderWidth: PixelLevelOption;
    borderColor: keyof typeof palette;
  }) => ({
    borderWidth: {
      default: 'none',
      ':hover': props.borderWidth,
    },
    borderStyle: {
      default: 'inherit',
      ':hover': 'solid',
    },
    borderBlockColor: {
      default: 'inherit',
      ':hover': palette[props.borderColor],
    },
    borderInlineColor: {
      default: 'inherit',
      ':hover': palette[props.borderColor],
    },
  }),
});

export const selected = stylex.create({
  baseSelected: {
    color: palette.baseWhite,
    backgroundColor: palette.lightBlue,
  },
});
