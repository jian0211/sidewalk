import { FlightBoardResponse } from '@/app/api/dashboard/flightBoard/route';
import { Locales } from '@/types/locale';

export const useCheapestTicketInfo = (
  data: FlightBoardResponse['cheapestTicketInfoData'],
) => {
  const { location, fee, from, to, tripType } = data;

  const title = (locale: Locales) =>
    `${location['country'][locale]} ${location['location'][locale]}`;

  const fromTo = `${from['iata']} - ${to['iata']}`;

  const convertCurrnecy: Record<Locales, 'krw' | 'jpy'> = {
    ko: 'krw',
    ja: 'jpy',
  };

  const convertCurrnecyUnit: Record<Locales, '₩' | '円'> = {
    ko: '₩',
    ja: '円',
  };

  return {
    states: {
      title,
      imageSrc: location.imgSrc,
      tripType,
      from: {
        airlineImage: from.airline.imageSrc,
        date: `${from['date']} ${from['day'].toUpperCase()}`,
        info: (locale: Locales) =>
          `${from['airline']['title'][locale]} ${fromTo}`,
      },
      to: {
        airlineImage: to.airline.imageSrc,
        date: `${to['date']} ${to['day'].toUpperCase()}`,
        info: (locale: Locales) =>
          `${to['airline']['title'][locale]} ${fromTo}`,
      },
      fee: (locale: Locales, text: string) =>
        `${fee[convertCurrnecy[locale]]}${convertCurrnecyUnit[locale]} ${text}`,
    },
    actions: {
      handleSearchingFlight: () => {
        // go to flight page
      },
    },
  };
};
