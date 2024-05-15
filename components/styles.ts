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

export type FlexProps = {
  display?: 'flex';
  flex?: `${0 | 1 | 2 | 3 | 4 | 5}` | 'auto';
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
    | '34rem'
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
  flex?: FlexProps; //typeof flexProperties; // FlexProps;
  color?: ColorProps;
  bgColor?: BgColorProps;
  font?: FontProps;
  position?: PositionProps;
  radius?: RadiusProps;
  border?: BorderProps;
  shadow?: {
    hoverShadow: keyof typeof shadowing;
  };
  margin?: MarginProps;
};
type PositionProps = 'relative' | 'absolute';
type ColorProps = {
  color: PaletteVars;
  hoverColor?: PaletteVars;
  checkedColor?: PaletteVars;
};
type BgColorProps = {
  color: PaletteVars;
  hoverColor?: PaletteVars;
  checkedColor?: PaletteVars;
};
type BorderProps = {
  borderWidth?: PixelLevelOption | RemLevelOpton;
  borderColor?: PaletteVars;
  hoverColor?: PaletteVars;
};

export const designStyles = stylex.create({
  size: (props: SizeProps) => ({
    width: props.width ?? false,
    height: props.height ?? false,
  }),
  flex: (props: FlexProps) => ({
    display: 'flex',
    flexDirection: props.flexDirection ?? 'row',
    alignItems: props.alignItems ?? 'stretch',
    justifyContent: props.justifyContent ?? 'flex-start',
    gap: spacing[props.gap ?? 'none'],
  }),
  border: (props: BorderProps) => ({
    borderStyle: 'solid',
    borderWidth: props.borderWidth ?? false,
    borderColor: {
      default: palette[props.borderColor ?? 'baseWhite'],
      ':hover': palette[props.hoverColor ?? props.borderColor!],
    },
  }),
  margin: (props: MarginProps) => ({
    marginBottom: props.marginBottom ?? false,
    marginTop: props.marginTop ?? false,
    marginRight: props.marginRight ?? false,
    marginLeft: props.marginLeft ?? false,
  }),
  radius: (props: RadiusProps) => ({
    borderTopLeftRadius: props.borderTopLeftRadius ?? false,
    borderTopRightRadius: props.borderTopRightRadius ?? false,
    borderBottomLeftRadius: props.borderBottomLeftRadius ?? false,
    borderBottomRightRadius: props.borderBottomRightRadius ?? false,
  }),
  color: (props: ColorProps) => ({
    color: {
      default: palette[props.color],
      ':hover': palette[props.hoverColor ?? props.color],
      // ':checked': props?.checkedColor ? palette[props.checkedColor] : false,
    },
  }),
  padding: (p: PaddingProps) => ({
    paddingBottom: p.paddingBottom ?? false,
    paddingLeft: p.paddingLeft ?? false,
    paddingRight: p.paddingRight ?? false,
    paddingTop: p.paddingTop ?? false,
  }),
  bgColor: (props: BgColorProps) => ({
    backgroundColor: {
      default: palette[props.color],
      ':hover': palette[props.hoverColor ?? props.color],
    },
  }),
  font: (props: FontProps) => ({
    fontSize: fontSizing[props.fontSize ?? 'small'],
    fontWeight: fontWeight[props.fontWeight ?? 'normal'],
    textDecoration: 'none',
  }),
  position: (position: PositionProps) => ({ position }),
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
