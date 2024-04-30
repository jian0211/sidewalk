'use client';

import { Locales } from '@/types/locale';
import { Dashboard } from '../components';
import { AveragePriceOfFlightTicket } from './averagePriceOfFlightTicket/AveragePriceOfFlightTicket';
import { DayOfTheWeekOfCheapTicket } from './dayOfTheWeekOfCheapTicket/DayOfTheWeekOfCheapTicket';
import { CheapestTicketTomorrow } from './cheapestTicketTomorrow/CheapestTicketTomorrow';
import { RecommendedTrip } from './recommendedTrip/RecommendedTrip';
import {
  CheapestTicketInfo,
  ResponseconstCheapestTicketInfoData,
} from './cheapestTicketInfo/CheapestTicketInfo';

type FlightBoardProps = {
  locale: Locales;
};

const averagePriceOfFlight = {
  toKorea: {
    jpy: 11245,
    krw: 115045,
  },
  toJapan: {
    jpy: 11200,
    krw: 115000,
  },
};
const cheapestTicketTomorrowDummy = {
  toKorea: {
    currency: 'jpy',
    from: {
      iata: 'NRT',
      time: '09:15',
    },
    to: {
      iata: 'INC',
      time: '11:30',
    },
    imageTitle: '',
    fee: 13000,
  },
  toJapan: {
    currency: 'jpy',
    from: {
      iata: 'INC',
      time: '10:30',
    },
    to: {
      iata: 'NRT',
      time: '12:45',
    },
    imageTitle: '',
    fee: 90000,
  },
};
const cheapestTicketInfoData: ResponseconstCheapestTicketInfoData = {
  location: {
    country: {
      ko: '대한민국',
      ja: '韓国',
    },
    location: {
      ko: '제주',
      ja: '済州',
    },
    imgSrc: 'jeju01',
  },
  tripType: 'roundTrip',
  fee: {
    krw: 30000,
    jpy: 34000,
  },
  from: {
    date: '5/12',
    day: 'tru',
    airline: {
      title: {
        ko: '제주항공',
        ja: '済州航空',
      },
      lata: 'JEU',
      imageSrc: 'Jeju_Air_Logo',
    },
    lata: 'NRT',
  },
  to: {
    date: '5/15',
    day: 'fri',
    airline: {
      title: {
        ko: '제주항공',
        ja: '済州航空',
      },
      lata: 'JEU',
      imageSrc: 'Jeju_Air_Logo',
    },
    lata: 'JEU',
  },
};
export const FlightBoard = async (props: FlightBoardProps) => {
  const { locale } = props;

  return (
    <Dashboard.Article>
      <Dashboard.ArticleHeader>
        <Dashboard.FlightAnimationIcon />
        <Dashboard.ArticleHeaderTitle>Heelo</Dashboard.ArticleHeaderTitle>
      </Dashboard.ArticleHeader>
      <Dashboard.ArticleBody>
        <AveragePriceOfFlightTicket
          locale={locale}
          averagePriceOfFlight={averagePriceOfFlight}
        />
        <DayOfTheWeekOfCheapTicket
          pricingDays={{
            cheapDay: { toJapan: 'mon', toKorea: 'sat' },
            expensiveDay: { toJapan: 'sun', toKorea: 'tue' },
          }}
        />
        <CheapestTicketTomorrow
          cheapestTicketInfo={cheapestTicketTomorrowDummy}
        />
        <RecommendedTrip />

        <CheapestTicketInfo
          locale={locale}
          cheapestTicketInfoData={cheapestTicketInfoData}
        />
        {/* 
    
      <ExchangeRateCalculator
        curreny={{
          krw: currentCurrenyDatas.krwCurrency.quote,
          jpy: currentCurrenyDatas.jpyCurrency.quote,
        }}
      />
      <ExchangeRateGraph
        currenyGraphData={currentCurrenyDatas.currenyGraphData}
      /> */}
      </Dashboard.ArticleBody>
    </Dashboard.Article>
  );
};
