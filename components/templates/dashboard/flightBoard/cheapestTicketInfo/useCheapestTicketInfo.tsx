import { Locales } from '@/types/locale';
import { ResponseconstCheapestTicketInfoData } from './CheapestTicketInfo';

export const useCheapestTicketInfo = (
  data: ResponseconstCheapestTicketInfoData,
) => {
  const { location, fee, from, to, tripType } = data;

  const title = (locale: Locales) =>
    `${location['country'][locale]} ${location['location'][locale]}`;

  const fromTo = `${from['lata']} - ${to['lata']}`;

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
