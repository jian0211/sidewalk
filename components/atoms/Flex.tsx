import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import * as stylex from '@stylexjs/stylex';
import { DesignProps, designStyles } from '../styles';

export type FlexProps = {
  flexProps?: DesignProps['flex']; //FlexVars;
  sizeProps?: DesignProps['size'];
  positionProps?: DesignProps['position'];
  bgColorProps?: DesignProps['bgColor'];
  colorProps?: DesignProps['color'];
  radiusProps?: DesignProps['radius'];
  paddingProps?: DesignProps['padding']; //RemLevelOpton | PixelLevelOption;
  marginProps?: DesignProps['margin']; //RemLevelOpton | PixelLevelOption;
  borderProps?: DesignProps['border']; //RemLevelOpton | PixelLevelOption;
  fontProps?: DesignProps['font'];
  xstyle?: StyleXArray<any>;
} & React.ComponentProps<'div'>;

export const Flex = (props: FlexProps) => {
  const {
    flexProps,
    sizeProps,
    bgColorProps,
    positionProps,
    radiusProps,
    paddingProps,
    marginProps,
    borderProps,
    colorProps,
    fontProps,
    xstyle,
    ...rest
  } = props;
  return (
    <div
      {...rest}
      {...stylex.props(
        positionProps && designStyles['position'](positionProps),
        flexProps && designStyles['flex'](flexProps),
        sizeProps && designStyles['size'](sizeProps),
        bgColorProps && designStyles['bgColor'](bgColorProps),
        colorProps && designStyles['color'](colorProps),
        radiusProps && designStyles['radius'](radiusProps),
        paddingProps && designStyles['padding'](paddingProps),
        marginProps && designStyles['margin'](marginProps),
        borderProps && designStyles['border'](borderProps),
        fontProps && designStyles['font'](fontProps),
        xstyle,
      )}
    />
  );
};
