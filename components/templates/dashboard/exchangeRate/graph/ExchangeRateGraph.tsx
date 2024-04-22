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
import { useExchangeRateGroph } from './useExchangeRateGraph';
import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';

type ExchangeRateGraphProps = {
  currenyGraphData: CurrentCurrenyResponse['currenyGraphData'];
} & React.ComponentProps<'div'>;
type NavProps = React.ComponentProps<'div'>;
type BodyProps = {
  graphData: Serie[];
} & React.ComponentProps<'div'>;
type RadioGroupProps = InputProps & {
  items: InputItemProps[];
  groupName: string;
  handleChange: (value: string) => void;
};
type RadioInputProps = {
  item: InputItemProps;
} & InputProps &
  React.ComponentProps<'input'>;
type InputItemProps = { value: string; label: string };
type InputProps = {
  currentValue: string;
  theme?: 'borderRadius';
};

export const ExchangeRateGraph = (props: ExchangeRateGraphProps) => {
  const { currenyGraphData, ...rest } = props;
  const { filterdGraphData } = useExchangeRateGroph({ currenyGraphData });
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
      <Body graphData={filterdGraphData} />
    </Dashboard.Panel>
  );
};

const Nav = (props: NavProps) => {
  return <div {...props} {...stylex.props(styles['nav'])} />;
};

const Body = (props: BodyProps) => {
  const { graphData, ...rest } = props;
  return (
    <div {...rest} {...stylex.props(styles['body'])}>
      <ResponsiveLine
        animate
        data={graphData}
        margin={{ top: 10, right: 20, bottom: 30, left: 40 }}
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
          tickSize: 20,
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
    <div {...stylex.props(styles['radioGroup'])}>
      {items.map((item) => (
        <RadioInput
          {...rest}
          key={item.value}
          name={groupName}
          item={item}
          currentValue={currentValue}
          onChange={(value) => handleChange(value.currentTarget.value as any)}
        />
      ))}
    </div>
  );
};

const RadioInput = (props: RadioInputProps) => {
  const { item, currentValue, theme, ...rest } = props;
  const isChecked = currentValue === item.value;
  return (
    <span key={item.value}>
      <input
        {...rest}
        {...stylex.props(styles['radioInput'], theme && styles[theme])}
        type="radio"
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
    paddingRight: '1rem',
  },
  body: {
    marginTop: '1rem',
    position: 'relative',
    width: '100%',
    padding: '1rem',
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
