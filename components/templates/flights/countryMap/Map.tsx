'use client';

import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  ZoomableGroup,
} from 'react-simple-maps';
import japanMap from '@/public/map/topology_japan_map.json';
import koreaMap from '@/public/map/topology_korea_map.json';

const geoUrl = { japanMap, koreaMap };

type GlobeMap = {
  useGraticule?: boolean;
};
type GlobeMapProps = GlobeMap;

export const GlobeMap = (props: GlobeMapProps) => {
  const { useGraticule } = props;
  return (
    <ComposableMap
      projection="geoOrthographic"
      projectionConfig={{
        rotate: [234, -28, -20],
        scale: 1200,
      }}
    >
      {useGraticule && <Graticule />}
      <Geographies geography={geoUrl['japanMap']}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return <Geography key={geo.rsmKey} geography={geo} />;
          })
        }
      </Geographies>
      <Geographies geography={geoUrl['koreaMap']}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return <Geography key={geo.rsmKey} geography={geo} />;
          })
        }
      </Geographies>
    </ComposableMap>
  );
};
