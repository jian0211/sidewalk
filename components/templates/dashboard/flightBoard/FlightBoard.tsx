'use client';

import { Locales } from '@/types/locale';
import { Dashboard } from '../components';
import { AveragePriceOfFlightTicket } from './averagePriceOfFlightTicket/AveragePriceOfFlightTicket';
import { DayOfTheWeekOfCheapTicket } from './dayOfTheWeekOfCheapTicket/DayOfTheWeekOfCheapTicket';
import { CheapestTicketTomorrow } from './cheapestTicketTomorrow/CheapestTicketTomorrow';

type FlightBoardProps = {
  locale: Locales;
};

export const FlightBoard = async (props: FlightBoardProps) => {
  const { locale } = props;

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
        {/* <AveragePriceOfFlightTicket /> */}
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
