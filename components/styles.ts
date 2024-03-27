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
  hasFlex?: FlexProps;
  hasBorder?: BorderProps;
  paddingLevel?: Padding;
  padding?: PixelLevelOption | RemLevelOpton;
  size?: SizeProps;
  hasRadius?: PixelLevelOption | 'inherit';
  color?: PaletteKeys;
  bgColor?: PaletteKeys;
  font?: FontProps;
};
type BorderProps = {
  width: PixelLevelOption;
  color: PaletteKeys | 'transparent';
  hoverColor?: PaletteKeys | 'transparent' | null;
};
type FlexProps = {
  flexDirection?: 'column' | 'row';
  alignItems?: 'start' | 'center' | 'end';
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | `space-${'evenly' | 'around' | 'between'}`;
  gap?: PixelLevelOption | RemLevelOpton;
  flex?: '1' | '2' | '3';
};
type SizeProps = {
  width?: PixelLevelOption | RemLevelOpton | '100%' | '23rem';
  height?: PixelLevelOption | RemLevelOpton | '100%';
};
type FontProps = {
  fontSize?: `${'0.8' | '0.9' | '1' | '1.1' | '1.2'}rem`;
  fontWeight?: 500 | 600;
};
export const designStyles = stylex.create({
  X_LAY: {
    borderBlockColor: 'pink',
    borderBlockStyle: 'solid',
    borderBlockWidth: '1px',
  },
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
    width: s?.width ?? null,
    height: s?.height ?? null,
  }),
  size: (props: DesignProps['size']) => ({
    width: props?.width ?? null,
    height: props?.height ?? null,
  }),
  flex: (props?: DesignProps['hasFlex']) => ({
    display: 'flex',
    flexDirection: props?.flexDirection ?? null,
    alignItems: props?.alignItems ?? null,
    justifyContent: props?.justifyContent ?? null,
    gap: props?.gap ?? null,
    flex: props?.flex ?? null,
  }),
  border: (props: DesignProps['hasBorder']) => ({
    borderWidth: props?.width ?? null,
    borderStyle: 'solid',
    borderBlockColor: {
      default: palette[props?.color ?? 'transparent'],
      ':hover': palette[props?.hoverColor ?? 'transparent'],
    },
    borderInlineColor: {
      default: palette[props?.color ?? 'transparent'],
      ':hover': palette[props?.hoverColor ?? 'transparent'],
    },
  }),
  radius: (pxLevel: DesignProps['hasRadius']) => ({
    borderRadius: pxLevel,
  }),
  color: (color: DesignProps['color']) => ({
    color: palette[color ?? 'transparent'],
  }),
  padding: (p: DesignProps['padding']) => ({
    padding: p ?? null,
  }),
  customPadding: (p: DesignProps['paddingLevel']) => ({
    paddingBottom: p?.paddingBottom ?? null,
    paddingTop: p?.paddingTop ?? null,
    paddingLeft: p?.paddingLeft ?? null,
    paddingRight: p?.paddingRight ?? null,
  }),
  bgColor: (color: DesignProps['bgColor']) => ({
    backgroundColor: palette[color ?? 'transparent'],
  }),
  font: (props: DesignProps['font']) => ({
    fontSize: props?.fontSize ?? null,
    fontWeight: props?.fontWeight ?? null,
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
