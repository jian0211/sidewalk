import * as stylex from '@stylexjs/stylex';
import { fontWeight, palette } from '../../../../styles/globalTokens.stylex';
import {
  Geographies as _Geographies,
  Geography,
  Marker as _Marker,
  Point,
} from 'react-simple-maps';
import { useCallback, useRef } from 'react';

type MarkerProps = {
  size?: number;
  key: React.Key;
  coordinates: Point;
  id: string;
  title: string;
};

type GeographiesProps = {
  mapData: Record<string, any>;
};
const Geographies = (props: GeographiesProps) => {
  return (
    <_Geographies geography={props.mapData}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            stroke={palette['baseWhite']}
            strokeWidth={0.2}
            style={{
              default: { fill: palette['softGray'] },
              hover: { fill: palette['skyBlue'] },
              pressed: { fill: '#E42' },
            }}
          />
        ))
      }
    </_Geographies>
  );
};

const Marker = (props: MarkerProps) => {
  const { size = 2, title, ...rest } = props;
  const textRef = useRef<SVGTextElement>(null);

  const refControl = useCallback(
    (props: { visibility: 'visible' | 'hidden' }) => {
      if (textRef.current) {
        textRef.current.style.visibility = props.visibility;
      }
    },
    [],
  );

  const handleMouseEnter = useCallback(() => {
    refControl({ visibility: 'visible' });
  }, [refControl]);

  const handleMouseLeave = useCallback(() => {
    refControl({ visibility: 'hidden' });
  }, [refControl]);

  return (
    <_Marker
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <circle
        r={size}
        fill={palette['vividRed']}
        stroke="transparent"
        strokeWidth={10}
      />
      <text
        ref={textRef}
        textAnchor="middle"
        y={-10}
        {...stylex.props(styles['markerText'])}
      >
        {title}
      </text>
    </_Marker>
  );
};

export const Maps = { Marker, Geographies };

const styles = stylex.create({
  markerText: {
    fontSize: '10px',
    fontWeight: fontWeight['bold'],
    visibility: 'hidden',
  },
});
