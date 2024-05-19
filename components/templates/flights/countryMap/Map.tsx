'use client';

import React from 'react';
import { ComposableMap, Graticule, ZoomableGroup } from 'react-simple-maps';
import japanMap from '@/public/map/topology_japan_map.json';
import koreaMap from '@/public/map/topology_korea_map.json';
import { useMap } from './useMap';
import { AirportsForMarker } from '@/app/[locale]/(flights)/flights/page';
import { Locales } from '@/types/locale';
import { Maps } from './components';

const geoUrl = { japanMap, koreaMap };

type GlobeMap = {
  useGraticule?: boolean;
};
type GlobeMapProps = {
  airportsForMarker: AirportsForMarker[];
  locale: Locales;
} & GlobeMap;

export const GlobeMap: React.FC<GlobeMapProps> = (props) => {
  const { useGraticule, airportsForMarker, locale } = props;
  const { actions } = useMap();
  const markerDatas = actions.convertForMarkerUse(airportsForMarker, locale);

  return (
    <ComposableMap
      projection="geoOrthographic"
      projectionConfig={{
        rotate: [225, -34, -10],
        center: [0, 0],
        scale: 2500,
      }}
    >
      <ZoomableGroup zoom={1}>
        {useGraticule && <Graticule />}
        <Maps.Geographies mapData={geoUrl['japanMap']} />
        <Maps.Geographies mapData={geoUrl['koreaMap']} />
        {markerDatas.map(({ name, ...rest }) => (
          <Maps.Marker key={name} id={name} title={name} {...rest} />
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};
