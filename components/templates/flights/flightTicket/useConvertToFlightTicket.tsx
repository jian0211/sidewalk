import { FlightTicketResponseData } from '@/app/api/flights/offers/route';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Locales } from '@/types/locale';

type useConvertToFlightTicketProps = {
  resData: FlightTicketResponseData;
  locale: Locales;
};

export const useConvertToFlightTicket = ({
  resData,
  locale,
}: useConvertToFlightTicketProps) => {
  const t = useTranslatedWord('flights.ticket');

  const AIRLINE_SERVICE_TYPE: Record<string, string> = {
    lcc: t('airline.type.lcc'),
    fsc: t('airline.type.fsc'),
    hsc: t('airline.type.hsc'),
    else: t('airline.type.else'),
  };

  const T_TIME: Record<string, string> = {
    hour: t('flightTime.hour'),
    min: t('flightTime.min'),
  };

  const getFlightTime = () => {
    const {
      flightTime: { hour, min },
    } = resData;
    return `${hour}${T_TIME['hour']} ${min}${T_TIME['min']}`;
  };

  const getTripType = () => {
    const T_TRIP_TYPE: Record<string, string> = {
      roundTrip: t('tripType.roundTrip'),
      oneWay: t('tripType.oneWay'),
    };
    return T_TRIP_TYPE[resData.tripType];
  };

  const getPrice = () => {
    const { price } = resData;
    const localeToCurrnecy: Record<Locales, keyof (typeof resData)['price']> = {
      ja: 'yen',
      ko: 'won',
    };
    const priceUnit = t('priceUnit');
    return `${price[localeToCurrnecy[locale]]}${priceUnit}`;
  };

  return {
    airline: {
      image: resData.airline.image,
      title: resData.airline.title[locale],
      serviceType: AIRLINE_SERVICE_TYPE[resData.airline.serviceType],
    },
    from: resData.from,
    to: resData.to,
    flightTime: getFlightTime(),
    tripType: getTripType(),
    price: getPrice(),
    select: t('select'),
  };
};
