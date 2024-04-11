import { ResponsiveLine, Serie } from '@nivo/line';
import * as stylex from '@stylexjs/stylex';

type NavProps = React.ComponentProps<'div'>;
type GraphProps = { graphData?: Serie[] } & React.ComponentProps<'div'>;

const Nav = (props: NavProps) => {
  return <div {...props} {...stylex.props(styles.nav)} />;
};

const Graph = (props: GraphProps) => {
  const { graphData = dummyData, ...rest } = props;
  return (
    <div {...rest} {...stylex.props(styles.graphBox)}>
      <ResponsiveLine
        data={graphData}
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
        enablePointLabel
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea
        areaBlendMode="hard-light"
        areaBaselineValue={100}
        areaOpacity={0.5}
        enableTouchCrosshair
      />
    </div>
  );
};

export const ExchangeRate = {
  Nav,
  Graph,
};
const dummyData = [
  {
    id: 'japan',
    color: 'hsl(332, 70%, 50%)',
    data: [
      {
        x: '1',
        y: 90,
      },
      {
        x: '2',
        y: 228,
      },
      {
        x: '3',
        y: 132,
      },
      {
        x: '4',
        y: 165,
      },
      {
        x: 'subway',
        y: 91,
      },
      {
        x: 'bus',
        y: 194,
      },
      {
        x: 'car',
        y: 247,
      },
      {
        x: 'moto',
        y: 108,
      },
      {
        x: 'bicycle',
        y: 111,
      },
      {
        x: 'horse',
        y: 244,
      },
      {
        x: 'skateboard',
        y: 298,
      },
      {
        x: 'others',
        y: 128,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(167, 70%, 50%)',
    data: [
      {
        x: '1',
        y: 218,
      },
      {
        x: '2',
        y: 234,
      },
      {
        x: '3',
        y: 29,
      },
      {
        x: '4',
        y: 294,
      },
      {
        x: 'subway',
        y: 229,
      },
      {
        x: 'bus',
        y: 121,
      },
      {
        x: 'car',
        y: 160,
      },
      {
        x: 'moto',
        y: 85,
      },
      {
        x: 'bicycle',
        y: 171,
      },
      {
        x: 'horse',
        y: 264,
      },
      {
        x: 'skateboard',
        y: 170,
      },
      {
        x: 'others',
        y: 229,
      },
    ],
  },
];

const styles = stylex.create({
  nav: {
    width: '59%',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  graphBox: {
    marginTop: '1rem',
    position: 'relative',
    width: '100%',
    height: '18rem',
  },
});
