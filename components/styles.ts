import * as stylex from '@stylexjs/stylex';
import {
  Padding,
  PaletteKeys,
  PixelLevelOption,
  RemLevelOpton,
  palette,
  shadowing,
  spacing,
} from '../styles/globalTokens.stylex';

/**
 * Status
 */
export type StatusProps = {
  isSelected?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
};
export type SelectedColors = {
  color: PaletteKeys;
  backgroundColor: PaletteKeys;
};

export const statusStyles = stylex.create({
  basicSelected: {
    color: palette.baseWhite,
    backgroundColor: palette.lightBlue,
  },
  customSelected: (props: { color: PaletteKeys; bgColor: PaletteKeys }) => ({
    color: palette[props.color],
    backgroundColor: palette[props.bgColor],
  }),
  checked: (bgColor: PaletteKeys) => ({
    backgroundColor: palette[bgColor],
  }),
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
});

/**
 * Designs
 */
export type DesignProps = {
  hasFlex?: boolean;
  hasBorder?: BorderProps;
  paddingLevel?: Padding;
  size?: {
    width?: PixelLevelOption | RemLevelOpton | '100%';
    height?: PixelLevelOption | RemLevelOpton | '100%';
  };
  hasRadius?: PixelLevelOption;
};
type BorderProps = {
  width: PixelLevelOption;
  color: PaletteKeys | 'transparent';
  hoverColor?: PaletteKeys | 'transparent' | null;
};

export const designStyles = stylex.create({
  basicBox: (size: PixelLevelOption | RemLevelOpton) => ({
    paddingBottom: size,
    paddingTop: size,
    paddingLeft: size,
    paddingRight: size,
    width: '100%',
    height: '100%',
  }),
  customBox: (p: Padding, s?: DesignProps['size']) => ({
    paddingBottom: p.paddingBottom,
    paddingTop: p.paddingTop,
    paddingLeft: p.paddingLeft,
    paddingRight: p.paddingRight,
    width: s?.width ?? 'fit-content',
    height: s?.height ?? 'fit-content',
  }),
  flex: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  border: (props: BorderProps) => ({
    borderWidth: props.width,
    borderStyle: 'solid',
    borderBlockColor: {
      default: palette[props.color],
      ':hover': palette[props.hoverColor ?? 'transparent'],
    },
    borderInlineColor: {
      default: palette[props.color],
      ':hover': palette[props.hoverColor ?? 'transparent'],
    },
  }),
  radius: (pxLevel: PixelLevelOption) => ({
    borderRadius: pxLevel,
  }),
});

/**
 * State-based
 */

export type StateBasedProps = {
  useHover?:
    | { type: 'basicHover'; props: BasicHover }
    | { type: 'borderHover'; props: BorderHover }
    | { type: 'shadowHover'; props?: undefined };
};

export type BasicHover = {
  color: keyof typeof palette;
  backgroundColor: keyof typeof palette;
};
export type BorderHover = {
  borderWidth: PixelLevelOption | 'inherit';
  borderColor: keyof typeof palette;
};

export const stateBasedstyles = stylex.create({
  basicHover: (props: BasicHover) => ({
    color: {
      default: 'transparent',
      ':hover': palette[props.color],
    },
    backgroundColor: {
      default: 'transparent',
      ':hover': palette[props.backgroundColor],
    },
  }),
  borderHover: (props: BorderHover) => ({
    borderWidth: {
      default: 'transparent',
      ':hover': props.borderWidth,
    },
    borderStyle: {
      default: null,
      ':hover': 'solid',
    },
    borderBlockColor: {
      default: 'transparent',
      ':hover': palette[props.borderColor],
    },
    borderInlineColor: {
      default: 'transparent',
      ':hover': palette[props.borderColor],
    },
  }),
  shadowHover: () => ({
    boxShadow: {
      default: 'transparent',
      ':hover': shadowing.basic,
    },
  }),
});

/**
 * Themes
 */
export const frameThemes = stylex.create({
  roundEdged: {
    borderColor: palette.whiteSoftGray,
    borderWidth: spacing.xxsmall,
    borderRadius: spacing.medium,
    borderStyle: 'solid',
  },
});

export const shadowThemes = stylex.create({
  main: {
    boxShadow: shadowing.basic,
  },
});
