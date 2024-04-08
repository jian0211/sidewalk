'use client';

import { ResponsiveLine } from '@nivo/line';

const dummyData = [
  {
    id: 'japan',
    color: 'hsl(332, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 90,
      },
      {
        x: 'helicopter',
        y: 228,
      },
      {
        x: 'boat',
        y: 132,
      },
      {
        x: 'train',
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
        x: 'plane',
        y: 218,
      },
      {
        x: 'helicopter',
        y: 234,
      },
      {
        x: 'boat',
        y: 29,
      },
      {
        x: 'train',
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
  {
    id: 'us',
    color: 'hsl(158, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 142,
      },
      {
        x: 'helicopter',
        y: 129,
      },
      {
        x: 'boat',
        y: 243,
      },
      {
        x: 'train',
        y: 80,
      },
      {
        x: 'subway',
        y: 89,
      },
      {
        x: 'bus',
        y: 83,
      },
      {
        x: 'car',
        y: 80,
      },
      {
        x: 'moto',
        y: 50,
      },
      {
        x: 'bicycle',
        y: 162,
      },
      {
        x: 'horse',
        y: 247,
      },
      {
        x: 'skateboard',
        y: 229,
      },
      {
        x: 'others',
        y: 295,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(254, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 82,
      },
      {
        x: 'helicopter',
        y: 92,
      },
      {
        x: 'boat',
        y: 293,
      },
      {
        x: 'train',
        y: 117,
      },
      {
        x: 'subway',
        y: 177,
      },
      {
        x: 'bus',
        y: 36,
      },
      {
        x: 'car',
        y: 150,
      },
      {
        x: 'moto',
        y: 25,
      },
      {
        x: 'bicycle',
        y: 34,
      },
      {
        x: 'horse',
        y: 80,
      },
      {
        x: 'skateboard',
        y: 193,
      },
      {
        x: 'others',
        y: 131,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(136, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 28,
      },
      {
        x: 'helicopter',
        y: 294,
      },
      {
        x: 'boat',
        y: 175,
      },
      {
        x: 'train',
        y: 188,
      },
      {
        x: 'subway',
        y: 15,
      },
      {
        x: 'bus',
        y: 232,
      },
      {
        x: 'car',
        y: 23,
      },
      {
        x: 'moto',
        y: 184,
      },
      {
        x: 'bicycle',
        y: 83,
      },
      {
        x: 'horse',
        y: 283,
      },
      {
        x: 'skateboard',
        y: 190,
      },
      {
        x: 'others',
        y: 38,
      },
    ],
  },
];

export const MyResponsiveLine = () => (
  <ResponsiveLine
    data={dummyData}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
      truncateTickAt: 0,
    }}
    enableGridX={false}
    lineWidth={5}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor', modifiers: [] }}
    enablePointLabel={true}
    pointLabel="y"
    pointLabelYOffset={-12}
    enableArea={true}
    areaBaselineValue={100}
    areaOpacity={0.3}
    enableTouchCrosshair={true}
    legends={[
      {
        anchor: 'top',
        direction: 'row',
        justify: false,
        translateX: 9,
        translateY: -28,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 89,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 15,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
