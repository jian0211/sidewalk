import * as stylex from '@stylexjs/stylex';
import {
  PaddingProps,
  PaletteKeys,
  PixelLevelOption,
  RemLevelOpton,
  palette,
  shadowing,
  spacing,
  fontSizing,
  fontWeight,
  MarginProps,
} from '../styles/globalTokens.stylex';

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
type RadiusProps = Partial<{
  [k in `border${
    | 'TopLeft'
    | 'TopRight'
    | 'BottomLeft'
    | 'BottomRight'}Radius`]: PixelLevelOption;
}>;

type SizeProps = {
  width?:
    | PixelLevelOption
    | RemLevelOpton
    | '100%'
    | '13rem'
    | '23rem'
    | 'auto'
    | 'inherit'
    | '320px';
  height?:
    | PixelLevelOption
    | RemLevelOpton
    | '100%'
    | '6rem'
    | '7rem'
    | '10rem'
    | 'auto'
    | 'inherit'
    | '100vh';
};

type FontProps = {
  fontSize?: keyof typeof fontSizing;
  fontWeight?: keyof typeof fontWeight;
  textDecoration?: 'none';
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
  padding?: PaddingProps;
  size?: SizeProps;
  flex?: FlexProps;
  color?: {
    color: PaletteKeys;
    hoverColor?: PaletteKeys;
    checkedColor?: PaletteKeys;
  };
  bgColor?: {
    color: PaletteKeys;
    hoverColor?: PaletteKeys;
    checkedColor?: PaletteKeys;
  };
  font?: FontProps;
  position?: 'relative';
  radius?: RadiusProps;
  border?: BorderProps;
  shadow?: {
    hoverShadow: keyof typeof shadowing;
  };
  margin?: MarginProps;
};

type BorderProps = {
  borderWidth?: PixelLevelOption | RemLevelOpton;
  borderColor?: PaletteKeys;
  hoverColor?: PaletteKeys;
};

export const designStyles = stylex.create({
  size: (props: DesignProps['size']) => ({
    width: props?.width,
    height: props?.height,
  }),
  flex: (props?: DesignProps['flex']) => ({
    display: 'flex',
    flexDirection: props?.flexDirection,
    alignItems: props?.alignItems,
    justifyContent: props?.justifyContent,
    gap: props?.gap,
  }),
  border: (props: DesignProps['border']) => ({
    borderStyle: 'solid',
    borderWidth: props?.borderWidth,
    borderColor: {
      default: palette[props?.borderColor ?? 'transparent'],
      ':hover': palette[props?.hoverColor ?? 'transparent'],
    },
  }),
  margin: (props: MarginProps) => ({
    marginBottom: props.marginBottom,
    marginTop: props.marginTop,
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
  }),
  radius: (props: DesignProps['radius']) => ({
    borderTopLeftRadius: props?.borderTopLeftRadius,
    borderTopRightRadius: props?.borderTopRightRadius,
    borderBottomLeftRadius: props?.borderBottomLeftRadius,
    borderBottomRightRadius: props?.borderBottomRightRadius,
  }),
  color: (props: DesignProps['color']) => ({
    color: {
      default: palette[props?.color ?? 'default'],
      ':hover': palette[props!.hoverColor ?? props!.color!],
      ':checked': palette[props!.checkedColor ?? props!.color!],
    },
  }),
  padding: (p: DesignProps['padding']) => ({
    paddingBottom: p?.paddingBottom,
    paddingLeft: p?.paddingLeft,
    paddingRight: p?.paddingRight,
    paddingTop: p?.paddingTop,
  }),
  bgColor: (props: DesignProps['bgColor']) => ({
    backgroundColor: {
      default: palette[props?.color ?? 'transparent'],
      ':hover': palette[props?.hoverColor ?? props!.color],
      ':checked': palette[props?.checkedColor ?? props!.color],
    },
  }),
  font: (props: DesignProps['font']) => ({
    fontSize: fontSizing[props?.fontSize ?? 'small'],
    fontWeight: fontWeight[props?.fontWeight ?? 'normal'],
    textDecoration: 'none',
  }),
  position: (position: DesignProps['position']) => ({ position }),
  shadow: (props: DesignProps['shadow']) => ({
    boxShadow: {
      default: null,
      ':hover': shadowing[props?.hoverShadow ?? 'none'],
    },
  }),
  cursor: {
    cursor: 'pointer',
  },
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
