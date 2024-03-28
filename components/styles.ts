import * as stylex from '@stylexjs/stylex';
import {
  DirectionOption,
  Padding,
  PaletteKeys,
  PixelLevelOption,
  RemLevelOpton,
  palette,
  shadowing,
  spacing,
} from '../styles/globalTokens.stylex';

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
  flex?: '1' | '2' | '3' | 'auto';
};
type CustomRadiusProps = Partial<{
  [k in `border${
    | 'TopLeft'
    | 'TopRight'
    | 'BottomLeft'
    | 'BottomRight'}Radius`]: PixelLevelOption;
}>;

type SizeProps = {
  width?: PixelLevelOption | RemLevelOpton | '100%' | '23rem';
  height?: PixelLevelOption | RemLevelOpton | '100%' | '6rem';
};
type FontProps = {
  fontSize?: `${'0.8' | '0.9' | '1' | '1.1' | '1.2' | '1.8'}rem`;
  fontWeight?: 500 | 600;
  color?: PaletteKeys;
  textDecoration?: 'none';
};

type BasicHover = {
  color: keyof typeof palette;
  backgroundColor: keyof typeof palette;
};
type BorderHover = {
  borderWidth: PixelLevelOption | 'inherit';
  borderColor: keyof typeof palette;
};

/**
 * Status
 */
export type StatusProps = {
  isSelected?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
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
  bgColor?: {
    color: PaletteKeys;
    hoverColor?: PaletteKeys;
  };
  font?: FontProps; // | CSSProperties["fontSize"];
  position?: 'relative';
  customRadius?: CustomRadiusProps;
  customBorder?: CustomBorderProps;
};

type CustomBorderProps = Partial<{
  [k in DirectionOption]: {
    color?: PaletteKeys;
    width?: PixelLevelOption | RemLevelOpton;
  };
}>;

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
    width: s?.width,
    height: s?.height,
  }),
  size: (props: DesignProps['size']) => ({
    width: props?.width,
    height: props?.height,
  }),
  flex: (props?: DesignProps['hasFlex']) => ({
    display: 'flex',
    flexDirection: props?.flexDirection,
    alignItems: props?.alignItems,
    justifyContent: props?.justifyContent,
    gap: props?.gap,
    flex: props?.flex,
  }),
  border: (props: DesignProps['hasBorder']) => ({
    borderWidth: props?.width,
    borderStyle: 'solid',
    borderBlockColor: {
      default: palette[props!.color],
      ':hover': palette[props?.hoverColor ?? props!.color],
    },
    borderInlineColor: {
      default: palette[props?.color ?? 'transparent'],
      ':hover': palette[props?.hoverColor ?? props!.color],
    },
  }),
  customBorder: (props: DesignProps['customBorder']) => ({
    borderBlockStyle: 'solid',
    borderTopColor: palette[props?.Top?.color ?? 'transparent'],
    borderRightColor: palette[props?.Right?.color ?? 'transparent'],
    borderBottomColor: palette[props?.Bottom?.color ?? 'transparent'],
    borderLeftColor: palette[props?.Left?.color ?? 'transparent'],
    borderTopWidth: props?.Top?.width ?? '0px',
    borderRightWidth: props?.Right?.width ?? '0px',
    borderBottomWidth: props?.Bottom?.width ?? '0px',
    borderLeftWidth: props?.Left?.width ?? '0px',
  }),
  radius: (pxLevel: DesignProps['hasRadius']) => ({
    borderRadius: pxLevel,
  }),
  color: (color: DesignProps['color']) => ({
    color: palette[color ?? 'transparent'],
  }),
  padding: (p: DesignProps['padding']) => ({
    padding: p,
  }),
  customPadding: (p: DesignProps['paddingLevel']) => ({
    paddingBottom: p?.paddingBottom,
    paddingTop: p?.paddingTop,
    paddingLeft: p?.paddingLeft,
    paddingRight: p?.paddingRight,
  }),
  bgColor: (props: DesignProps['bgColor']) => ({
    backgroundColor: {
      default: palette[props!.color],
      ':hover': palette[props?.hoverColor ?? props!.color],
    },
  }),
  font: (props: DesignProps['font']) => ({
    fontSize: props?.fontSize,
    fontWeight: props?.fontWeight,
    color: palette[props?.color ?? 'darkGray'],
    textDecoration: props?.textDecoration,
  }),
  position: (position: DesignProps['position']) => ({
    position: position ?? 'static',
  }),
  customRadius: (props: DesignProps['customRadius']) => ({
    borderTopRightRadius: props?.borderTopRightRadius,
    borderTopLeftRadius: props?.borderTopLeftRadius,
    borderBottomLeftRadius: props?.borderBottomLeftRadius,
    borderBottomRightRadius: props?.borderBottomRightRadius,
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
  useCustomSelected?: { color: PaletteKeys; bgColor: PaletteKeys };
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
  customSelected: (props: { color: PaletteKeys; bgColor: PaletteKeys }) => ({
    color: palette[props.color],
    backgroundColor: palette[props.bgColor],
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
