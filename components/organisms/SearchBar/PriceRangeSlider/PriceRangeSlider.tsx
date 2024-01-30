import * as stylex from '@stylexjs/stylex';
import { useLocale } from 'next-intl';

type PriceRangeSliderContainerProps = React.ComponentPropsWithoutRef<'section'>;
type LabelBoxProps = React.ComponentPropsWithoutRef<'div'> & {
  rangeType: 'min' | 'max';
};
type PriceContentProps = React.ComponentPropsWithoutRef<'div'>;
type TitleProps = React.ComponentPropsWithoutRef<'h3'>;
type PriceRangeSliderProps = React.ComponentPropsWithoutRef<'div'>;

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
      <label {...stylex.props(styles.label)}>{rangeType}</label>
      <p {...stylex.props(styles.p)} id="min-value">
        {children}
        {currencySymbol[locale]}
      </p>
    </div>
  );
};

export const PriceRangeSlider = (props: PriceRangeSliderProps) => {
  return (
    <div {...stylex.props(styles.rangeSlider)} {...props}>
      <div {...stylex.props(styles.rangeFill)}></div>

      <input
        type="range"
        className="min-price"
        value="100"
        min="10"
        max="500"
        step="10"
      />
      <input
        type="range"
        className="max-price"
        value="250"
        min="10"
        max="500"
        step="10"
      />
    </div>
  );
};

const styles = stylex.create({
  container: {
    width: '25rem',
    backgroundColor: '#fff',
    padding: '1rem',
    // boxShadow: '0px 9px 20px 0px rgba(14, 88, 48, 0.1)',
    // height: '12rem',
  },
  title: {
    fontSize: '18px',
    fontWeight: 500,
    color: '#000',
    marginBottom: '20px',
    textAlign: 'center',
  },
  priceContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 10px',
  },
  labelBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
  },
  p: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  rangeSlider: {
    width: '400px',
    position: 'relative',
    margin: '15px 0 30px 0',
  },
  rangeFill: {
    height: '6px',
    backgroundColor: '#36b37e',
    position: 'absolute',
    zIndex: 1,
  },
});

//   .range-slider {
//     width: 400px;
//     position: relative;
//     margin: 15px 0 30px 0;
//   }

//   .range-fill {
//     height: 6px;
//     background-color: #36b37e;
//     position: absolute;
//     z-index: 1;
//   }
