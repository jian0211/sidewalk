'use client';

import { Locales } from '@/types/locale';
import { Dashboard } from '../components';
import { AveragePriceOfFlightTicket } from './averagePriceOfFlightTicket/AveragePriceOfFlightTicket';
import { DayOfTheWeekOfCheapTicket } from './dayOfTheWeekOfCheapTicket/DayOfTheWeekOfCheapTicket';
import { CheapestTicketTomorrow } from './cheapestTicketTomorrow/CheapestTicketTomorrow';
import { RecommendedTrip } from './recommendedTrip/RecommendedTrip';
import { CheapestTicketInfo } from './cheapestTicketInfo/CheapestTicketInfo';
import { AirPriceVariationGraph } from './airPriceVariationGraph/AirPriceVariationGraph';
import { FlightBoardResponse } from '@/app/api/dashboard/flightBoard/route';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

type FlightBoardProps = {
  flightBoardDatas: FlightBoardResponse;
  locale: Locales;
};

export const FlightBoard = async (props: FlightBoardProps) => {
  const { locale, flightBoardDatas } = props;
  const t = useTranslatedWord('dashboard.flight');

  return (
    <Dashboard.Article>
      <Dashboard.ArticleHeader>
        <Dashboard.FlightAnimationIcon />
        <Dashboard.ArticleHeaderTitle>
          {t('title')}
        </Dashboard.ArticleHeaderTitle>
      </Dashboard.ArticleHeader>
      <Dashboard.ArticleBody>
        <AveragePriceOfFlightTicket
          locale={locale}
          averagePriceOfFlight={flightBoardDatas.averagePriceOfFlight}
        />
        <DayOfTheWeekOfCheapTicket
          pricingDays={flightBoardDatas.dayOfTheWeekOfCheapTicket}
        />
        <CheapestTicketTomorrow
          locale={locale}
          cheapestTicketTomorrow={flightBoardDatas.cheapestTicketTomorrow}
        />

        <RecommendedTrip />

        <CheapestTicketInfo
          locale={locale}
          cheapestTicketInfoData={flightBoardDatas.cheapestTicketInfoData}
        />

        <AirPriceVariationGraph
          airPriceVariationGraphData={
            flightBoardDatas.airPriceVariationGraphData
          }
          locale={locale}
        />
      </Dashboard.ArticleBody>
    </Dashboard.Article>
  );
};
