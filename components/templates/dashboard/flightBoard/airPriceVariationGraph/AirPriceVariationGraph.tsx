import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { ResponsiveBar } from '@nivo/bar';
import * as stylex from '@stylexjs/stylex';
import { useAirPriceVariationGraph } from './useAirPriceVariationGraph';
import { Locales } from '@/types/locale';
import { FlightBoardResponse } from '@/app/api/dashboard/flightBoard/route';

type AirPriceVariationGraphProps = {
  airPriceVariationGraphData: FlightBoardResponse['airPriceVariationGraphData'];
  locale: Locales;
} & React.ComponentProps<'div'>;
export type AirPriceVariationGraphData = {
  date: string;
  krw: number;
  jpy: number;
};

export const AirPriceVariationGraph = (props: AirPriceVariationGraphProps) => {
  const { airPriceVariationGraphData, locale, ...rest } = props;
  const t = useTranslatedWord('dashboard.flight.airPriceVariationGraph');
  const { actions } = useAirPriceVariationGraph();
  const formattedGraphData = actions.formatDateSuffixForGraphData({
    target: airPriceVariationGraphData,
    locale: locale,
  });
  return (
    <Dashboard.Panel {...rest} theme="graph" title={t('label')}>
      <Dashboard.PanelHeader justifyContent="space-between">
        <Dashboard.PanelTitle>{t('title')}</Dashboard.PanelTitle>
      </Dashboard.PanelHeader>
      <Dashboard.PanelBody>
        <BarGraph graphData={formattedGraphData} />
      </Dashboard.PanelBody>
    </Dashboard.Panel>
  );
};

type BarGraphProps = {
  graphData: AirPriceVariationGraphData[];
};

const BarGraph = (props: BarGraphProps) => {
  const { graphData, ...rest } = props;
  return (
    <div {...rest} {...stylex.props(styles['body'])}>
      <ResponsiveBar
        data={graphData}
        keys={['krw', 'jpy']}
        indexBy="date"
        margin={{ top: 10, right: 60, bottom: 30, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          { match: { id: 'fries' }, id: 'dots' },
          { match: { id: 'sandwich' }, id: 'lines' },
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -60,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        role="application"
        ariaLabel="Nivo bar chart"
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 70,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 60,
            itemHeight: 30,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

const styles = stylex.create({
  body: {
    marginTop: '1rem',
    position: 'relative',
    width: '100%',
    padding: '1rem',
    height: '18rem',
    overflow: 'visible',
  },
});
