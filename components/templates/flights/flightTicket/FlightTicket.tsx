import { Flex } from '@/components/atoms/Flex';
import { Images } from '@/components/atoms/Image';
import { Text } from '@/components/atoms/Text';
import { Flights } from '../components';
import { Button } from '@/components/atoms/Button';
import { Locales } from '@/types/locale';
import { useConvertToFlightTicket } from './useConvertToFlightTicket';
import { FlightTicketResponseData } from '@/app/api/flights/offers/route';

type FlightTicketProps = {
  locale: Locales;
  flightTicketData: FlightTicketResponseData;
} & React.ComponentProps<'li'>;

export const FlightTicket = (props: FlightTicketProps) => {
  const { locale, flightTicketData, ...rest } = props;
  const { airline, from, to, flightTime, tripType, price, select } =
    useConvertToFlightTicket({ resData: flightTicketData, locale });

  return (
    <Flights.Li {...rest}>
      <Flex
        flexProps={{
          flexDirection: 'row',
          gap: 'medium',
          alignItems: 'center',
          flex: '1',
        }}
      >
        <Images imageTitle={airline.image} width={80} />
        <Flights.LabelAndText
          labelProps={{ msg: airline.title }}
          textProps={{ msg: airline.serviceType }}
        />
      </Flex>

      <Flex
        flexProps={{ flexDirection: 'row', gap: 'small' }}
        sizeProps={{ width: '13rem' }}
      >
        <Flights.LabelAndText
          labelProps={{
            msg: from.time,
            fontProps: { fontSize: 'xsmall' },
          }}
          textProps={{
            msg: from.iata,
            colorProps: { color: 'baseGray' },
          }}
        />

        <Flex
          flexProps={{
            flexDirection: 'column',
            flex: 'auto',
            alignItems: 'center',
          }}
          sizeProps={{ width: '100%' }}
        >
          <Text fontProps={{ fontSize: 'xsmall' }}>{flightTime}</Text>
          <Flights.Hr />
          <Text fontProps={{ fontSize: 'xsmall' }}>{tripType}</Text>
        </Flex>

        <Flights.LabelAndText
          labelProps={{
            msg: to.time,
            fontProps: { fontSize: 'xsmall' },
          }}
          textProps={{
            msg: to.iata,
            colorProps: { color: 'baseGray' },
          }}
        />
      </Flex>

      <Flex
        flexProps={{
          flexDirection: 'row',
          gap: 'small',
          flex: '1',
          alignItems: 'center',
        }}
      >
        <Text fontProps={{ fontSize: 'small' }}>{price}</Text>
        <Button theme="round" bgColor={{ color: 'baseGray' }}>
          <Text
            fontProps={{ fontWeight: 'bold' }}
            colorProps={{ color: 'brightGreen' }}
          >
            {select}
          </Text>
        </Button>
      </Flex>
    </Flights.Li>
  );
};
