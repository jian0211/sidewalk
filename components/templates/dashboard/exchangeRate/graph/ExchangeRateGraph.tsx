import {
  PaletteVars,
  fontWeight,
  palette,
  spacing,
} from '../../../../../styles/globalTokens.stylex';
import { ResponsiveLine, Serie } from '@nivo/line';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { Dashboard } from '../../components';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { useExchangeRateCountry } from '@/store/exchangeRateCountry';
import { useExchangeRateDateRage } from '@/store/exchangeRateDateRange';

type ExchangeRateGraphProps = BodyProps & React.ComponentProps<'div'>;
type NavProps = React.ComponentProps<'div'>;
type BodyProps = {
  graphData: {
    jpy: { x: string; y: number }[];
    krw: { x: string; y: number }[];
  };
} & React.ComponentProps<'div'>;
type RadioGroupProps = InputProps & {
  items: InputItemProps[];
  handleChange: (value: string) => void;
};
type RadioInputProps = {
  item: InputItemProps;
} & InputProps &
  React.ComponentProps<'input'>;
type InputItemProps = { value: string; label: string };
type InputProps = {
  groupName: string;
  currentValue: string;
  theme?: 'borderRadius';
};

export const ExchangeRateGraph = (props: ExchangeRateGraphProps) => {
  const { graphData, ...rest } = props;
  const t = useTranslatedWord('dashboard.exchangeRate.graph');
  const { country, setCountry } = useExchangeRateCountry();
  const { dateRage, setDateRage } = useExchangeRateDateRage();
  return (
    <Dashboard.Panel {...rest} theme="graph" title="為替レートグラフ">
      <Nav>
        <RadioGroup
          groupName="countryRadio"
          items={[
            { value: 'japan', label: t('japan') },
            { value: 'korea', label: t('korea') },
          ]}
          handleChange={(value) => setCountry(value as any)}
          currentValue={country}
        />

        <RadioGroup
          theme="borderRadius"
          groupName="dateRadio"
          items={[
            { value: 'year', label: '年' },
            { value: 'month', label: '月' },
            { value: 'day', label: '日' },
          ]}
          handleChange={(value) => setDateRage(value as any)}
          currentValue={dateRage}
        />
      </Nav>
      <Body graphData={graphData} />
    </Dashboard.Panel>
  );
};

const Nav = (props: NavProps) => {
  return <div {...props} {...stylex.props(styles['nav'])} />;
};

const Body = (props: BodyProps) => {
  const { graphData, ...rest } = props;
  const currenyDatas: Serie[] = [
    {
      id: 'japan',
      color: 'hsl(353, 100%, 24%)',
      data: graphData.jpy.map((data) => {
        return {
          x: data.x,
          y: data.y.toFixed(2),
        };
      }),
    },
    {
      id: 'korea',
      color: 'hsl(209, 100%, 23%)',
      data: graphData.krw.map((data) => {
        return {
          x: data.x,
          y: (data.y / 10).toFixed(2),
        };
      }),
    },
  ];
  return (
    <div {...rest} {...stylex.props(styles['body'])}>
      <ResponsiveLine
        data={currenyDatas}
        margin={{ top: 10, right: 10, bottom: 30, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 10,
          tickPadding: 0,
          tickRotation: 0,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 10,
          tickPadding: 0,
          tickRotation: 0,
          truncateTickAt: 0,
        }}
        lineWidth={5}
        pointSize={15}
        useMesh={true}
        enablePointLabel={true}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        areaBlendMode="hard-light"
        areaBaselineValue={100}
        areaOpacity={0.5}
        enableTouchCrosshair={true}
      />
    </div>
  );
};

const RadioGroup = (props: RadioGroupProps) => {
  const { items, groupName, handleChange, currentValue, ...rest } = props;
  return (
    <fieldset {...stylex.props(styles['radioGroup'])}>
      {items.map((item) => (
        <RadioInput
          {...rest}
          key={item.value}
          groupName={groupName}
          item={item}
          currentValue={currentValue}
          onChange={(value) => handleChange(value.currentTarget.value as any)}
        />
      ))}
    </fieldset>
  );
};

const RadioInput = (props: RadioInputProps) => {
  const { groupName, item, currentValue, theme, ...rest } = props;
  const isChecked = currentValue === item.value;
  return (
    <span key={item.value}>
      <input
        {...rest}
        {...stylex.props(styles['radioInput'], theme && styles[theme])}
        type="radio"
        name={groupName}
        value={item.value}
        id={item.value}
        defaultChecked={isChecked}
        checked={isChecked}
      />
      <label
        {...stylex.props(
          styles['radioLabel'],
          isChecked && styles['radioLabelChecked'],
        )}
        htmlFor={item.value}
      >
        {item.label}
      </label>
    </span>
  );
};

const styles = stylex.create({
  nav: {
    width: '59%',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    marginTop: '1rem',
    position: 'relative',
    width: '100%',
    height: '18rem',
  },
  countryColor: (props: Extract<PaletteVars, 'japanRed' | 'koreaBlue'>) => ({
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    backgroundColor: palette[props],
  }),
  radioGroup: {
    display: 'flex',
    gap: '1rem',
  },
  radioInput: {
    display: 'none',
  },
  radioLabelChecked: {
    color: palette['darkGray'],
  },
  radioLabel: {
    fontWeight: fontWeight['bold'],
    color: palette['baseGray'],
    cursor: 'pointer',
  },
  borderRadius: {
    borderWidth: spacing['xxsmall'],
    borderRadius: spacing['xxsmall'],
    borderColor: palette['baseGray'],
    borderStyle: 'solid',
  },
});
