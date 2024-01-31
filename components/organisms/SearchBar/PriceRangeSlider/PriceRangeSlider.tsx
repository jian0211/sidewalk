import { FLIGHT_COST } from '@/store/fligths';
import * as stylex from '@stylexjs/stylex';
import { useLocale } from 'next-intl';
import React from 'react';

type PriceRangeSliderContainerProps = React.ComponentPropsWithoutRef<'section'>;
type LabelBoxProps = React.ComponentPropsWithoutRef<'div'> & {
  rangeType: 'min' | 'max';
};
type PriceContentProps = React.ComponentPropsWithoutRef<'div'>;
type TitleProps = React.ComponentPropsWithoutRef<'h3'>;
type PriceRangeSliderProps = React.ComponentPropsWithoutRef<'div'>;
type RangeFillBoxProps = React.ComponentPropsWithoutRef<'div'> & {
  flightCost: typeof FLIGHT_COST;
};
type PriceRangeSliderInputProps = React.ComponentPropsWithoutRef<'input'>;

export const PriceRangeSliderContainer = (
  props: PriceRangeSliderContainerProps,
) => {
  return <section {...stylex.props(styles.container)} {...props} />;
};

export const PriceContent = (props: PriceContentProps) => {
  return <div {...stylex.props(styles.priceContent)} {...props} />;
};

export const Title = (props: TitleProps) => {
  return <h3 {...stylex.props(styles.title)} {...props} />;
};

export const LabelBox = ({ rangeType, children, ...props }: LabelBoxProps) => {
  const locale = useLocale();
  const currencySymbol: Record<string, string> = {
    ja: '￥',
    ko: '￦',
  };
  return (
    <div {...stylex.props(styles.labelBox)} {...props}>
      <label {...stylex.props(styles.label)}>{rangeType.toUpperCase()}</label>
      <p {...stylex.props(styles.p)} id="min-value">
        {children}
        {currencySymbol[locale]}
      </p>
    </div>
  );
};

export const PriceRangeSlider = (props: PriceRangeSliderProps) => {
  return <div {...stylex.props(styles.rangeSlider)} {...props} />;
};

export const RangeFillBox = ({
  flightCost: { min, max },
  ...props
}: RangeFillBoxProps) => {
  return (
    // 범위 색칠 구현하기
    <div
      style={{
        left: min + ''.replace(/0/g, '') + 'rem',
        right: max + ''.replace(/0/g, '') + 'rem',
      }}
      {...stylex.props(styles.rangeFill)}
      {...props}
    />
  );
};

export const PriceRangeSliderInput = React.forwardRef<
  HTMLInputElement,
  PriceRangeSliderInputProps
>((props, ref) => {
  const locale = useLocale();

  return (
    <input
      ref={ref}
      type="range"
      step={locale === 'ja' ? '1000' : '10000'}
      min={FLIGHT_COST.min}
      max={FLIGHT_COST.max}
      {...props}
    />
  );
});
PriceRangeSliderInput.displayName = 'PriceRangeSliderInput';

const styles = stylex.create({
  container: {
    width: '23rem',
    backgroundColor: '#fff',
    padding: '1rem',
  },
  title: {
    textAlign: 'center',
    color: '#000',
  },
  priceContent: {
    fontSize: '0.9rem',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '5px',
  },
  label: {},
  p: {},
  rangeSlider: {
    position: 'relative',
    margin: '1rem 0',
  },
  rangeFill: {
    height: '6px',
    backgroundColor: '#36b37e',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
});
