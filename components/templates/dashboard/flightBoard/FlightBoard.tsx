'use client';

import { Locales } from '@/types/locale';
import { Dashboard } from '../components';
import { AveragePriceOfFlightTicket } from './averagePriceOfFlightTicket/AveragePriceOfFlightTicket';
import { DayOfTheWeekOfCheapTicket } from './dayOfTheWeekOfCheapTicket/DayOfTheWeekOfCheapTicket';

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
        <DayOfTheWeekOfCheapTicket cheapDay="fri" expensiveDay="mon" />
        {/* <AveragePriceOfFlightTicket /> */}
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
