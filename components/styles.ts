import * as stylex from '@stylexjs/stylex';
import {
  PaddingProps,
  PaletteVars,
  PixelLevelOption,
  RemLevelOpton,
  palette,
  shadowing,
  spacing,
  fontSizing,
  fontWeight,
  MarginProps,
  SizeOption,
} from '../styles/globalTokens.stylex';

type FlexProps = {
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
    | '320px'
    | '360px';
  height?:
    | PixelLevelOption
    | RemLevelOpton
    | '100%'
    | '6rem'
    | '7rem'
    | '10rem'
    | '14rem'
    | 'auto'
    | '180px'
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
  customSelected: (props: { color: PaletteVars; bgColor: PaletteVars }) => ({
    color: palette[props.color],
    backgroundColor: palette[props.bgColor],
  }),
  checked: (bgColor: PaletteVars) => ({
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
    color: PaletteVars;
    hoverColor?: PaletteVars;
    checkedColor?: PaletteVars;
  };
  bgColor?: {
    color: PaletteVars;
    hoverColor?: PaletteVars;
    checkedColor?: PaletteVars;
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
  borderColor?: PaletteVars;
  hoverColor?: PaletteVars;
};

export const designStyles = stylex.create({
  size: (props: DesignProps['size']) => ({
    width: props?.width ?? false,
    height: props?.height ?? false,
  }),
  flex: (props: DesignProps['flex']) => ({
    display: 'flex',
    flexDirection: props?.flexDirection,
    alignItems: props?.alignItems,
    justifyContent: props?.justifyContent,
    gap: spacing[props?.gap ?? 'none'],
  }),
  border: (props: DesignProps['border']) => ({
    borderStyle: 'solid',
    borderWidth: props?.borderWidth ?? false,
    borderColor: {
      default: props?.borderColor ? palette[props.borderColor] : false,
      ':hover': props?.hoverColor ? palette[props.hoverColor] : false,
    },
  }),
  margin: (props: DesignProps['margin']) => ({
    marginBottom: props?.marginBottom ?? false,
    marginTop: props?.marginTop ?? false,
    marginRight: props?.marginRight ?? false,
    marginLeft: props?.marginLeft ?? false,
  }),
  radius: (props: DesignProps['radius']) => ({
    borderTopLeftRadius: props?.borderTopLeftRadius ?? false,
    borderTopRightRadius: props?.borderTopRightRadius ?? false,
    borderBottomLeftRadius: props?.borderBottomLeftRadius ?? false,
    borderBottomRightRadius: props?.borderBottomRightRadius ?? false,
  }),
  color: (props: DesignProps['color']) => ({
    color: {
      default: props?.color ? palette[props.color] : false,
      ':hover': palette[props?.hoverColor ?? props!.color!],
      ':checked': props?.checkedColor ? palette[props.checkedColor] : false,
    },
  }),
  padding: (p: DesignProps['padding']) => ({
    paddingBottom: p?.paddingBottom ?? false,
    paddingLeft: p?.paddingLeft ?? false,
    paddingRight: p?.paddingRight ?? false,
    paddingTop: p?.paddingTop ?? false,
  }),
  bgColor: (props: DesignProps['bgColor']) => ({
    backgroundColor: {
      default: props?.color ? palette[props.color] : false,
      ':hover': palette[props?.hoverColor ?? props!.color],
      ':checked': props?.checkedColor ? palette[props.checkedColor] : false,
    },
  }),
  font: (props: DesignProps['font']) => ({
    fontSize: props?.fontSize ? fontSizing[props.fontSize] : false,
    fontWeight: props?.fontWeight ? fontWeight[props.fontWeight] : false,
    textDecoration: 'none',
  }),
  position: (position: DesignProps['position']) => ({ position }),
  shadow: (props: DesignProps['shadow']) => ({
    boxShadow: {
      default: null,
      ':hover': props?.hoverShadow ? shadowing[props.hoverShadow] : false,
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
