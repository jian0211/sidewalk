import { designStyles } from '@/components/styles';
import { FLIGHT_COST } from '@/store/fligths';
import {
  fontWeight,
  palette,
  spacing,
} from '../../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { useLocale } from 'next-intl';
import React from 'react';
import './styles.css';

type ContainerProps = React.ComponentPropsWithoutRef<'section'>;
type LabelBoxProps = React.ComponentPropsWithoutRef<'div'> & {
  rangeType: 'min' | 'max';
};
type ContentProps = React.ComponentPropsWithoutRef<'div'>;
type TitleProps = React.ComponentPropsWithoutRef<'h3'>;
type SliderProps = React.ComponentPropsWithoutRef<'div'>;
type RangeFillBoxProps = React.ComponentPropsWithoutRef<'div'> & {
  flightCost: typeof FLIGHT_COST;
};
type InputProps = React.ComponentPropsWithoutRef<'input'>;

const TOTAL_WIDTH = 23;

const Container = (props: ContainerProps) => {
  return (
    <section
      {...props}
      {...stylex.props(
        designStyles['position']('relative'),
        designStyles['size']({ width: `${TOTAL_WIDTH}rem`, height: '4rem' }),
        designStyles['padding']({
          paddingBottom: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '10px',
        }),
        designStyles['bgColor']({ color: 'baseWhite' }),
        designStyles['flex']({
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'medium',
        }),
      )}
    />
  );
};

const Content = (props: ContentProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        designStyles['flex']({
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'medium',
        }),
      )}
    />
  );
};

const Title = (props: TitleProps) => {
  return <h4 {...props} {...stylex.props(styles.title)} />;
};

const LabelBox = ({ rangeType, children, ...props }: LabelBoxProps) => {
  const locale = useLocale();
  const currencySymbol: Record<string, string> = {
    ja: '￥',
    ko: '￦',
  };
  return (
    <div
      {...props}
      {...stylex.props(
        designStyles['flex']({
          flex: '1',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'xxsmall',
        }),
      )}
    >
      <label
        {...stylex.props(
          designStyles['font']({
            fontSize: 'xsmall',
            fontWeight: 'medium',
          }),
        )}
      >
        {rangeType.toUpperCase()}
      </label>
      <p id="min-value">
        {children}
        {currencySymbol[locale]}
      </p>
    </div>
  );
};

const Slider = (props: SliderProps) => <div {...props} />;

export const RangeFillBox = ({
  flightCost: { min, max },
  ...props
}: RangeFillBoxProps) => {
  // fill range
  const left = ((min / FLIGHT_COST.max) * TOTAL_WIDTH).toFixed(2) + 'rem';
  const right = ((1 - max / FLIGHT_COST.max) * TOTAL_WIDTH).toFixed(2) + 'rem';
  return <div {...stylex.props(styles.rangeFill(left, right))} {...props} />;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const locale = useLocale();
  const stepOfLocale: Record<string, string> = {
    ja: '1000',
    ko: '10000',
  };
  return (
    <input
      {...props}
      {...stylex.props(
        designStyles['color']({
          color: 'lightBlue',
        }),
      )}
      ref={ref}
      type="range"
      step={stepOfLocale[locale]}
      min={FLIGHT_COST.min}
      max={FLIGHT_COST.max}
    />
  );
});
Input.displayName = 'PriceRangeSliderInput';

export const PriceRange = {
  Container,
  Content,
  Title,
  LabelBox,
  Slider,
  RangeFillBox,
  Input,
};

const styles = stylex.create({
  title: {
    flex: '1',
    textAlign: 'center',
    color: palette['darkGray'],
  },
  rangeFill: (left, right) => ({
    left,
    right,
    height: spacing['xsmall'],
    backgroundColor: palette['lightBlue'],
    position: 'absolute',
    zIndex: 1,
    width: 'auto',
    fontWeight: fontWeight['bold'],
  }),
});
