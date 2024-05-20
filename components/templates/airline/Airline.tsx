'use client';

import { Prisma } from '@prisma/client';
import { useAirline } from './useAirline';
import { Airlines } from './components';
import { Flex } from '@/components/atoms/Flex';

type AirlineProps = {
  airlineList: Prisma.AirlineCreateInput[];
};

export const Airline = ({ airlineList }: AirlineProps) => {
  // const { actions } = useAirline();
  // const airlines = actions.filterAirlineType(airlineList);
  if (!airlineList || airlineList.length === 0) {
    return <div>No airlines data available</div>;
  }
  return (
    <Airlines.Body>
      {airlineList.map((airline, i) => (
        <Airlines.FeaturePanel key={i}>
          <Airlines.FeaturePanelInfo>
            <Flex
              flexProps={{
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <Airlines.LinkIcon href={airline.link} />
            </Flex>
            <Flex
              flexProps={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'small',
              }}
              fontProps={{
                fontSize: 'xsmall',
                fontWeight: 'bold',
              }}
            >
              <span>{airline.titleEn}</span>
              <span>{airline.titleJa}</span>
              <span>{airline.titleKo}</span>
            </Flex>
          </Airlines.FeaturePanelInfo>
          <Airlines.CompanyImage imageTitle={airline.imgTitle} />
        </Airlines.FeaturePanel>
      ))}
    </Airlines.Body>
  );
};
