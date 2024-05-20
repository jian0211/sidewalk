import { Dashboard } from './components';
import { PageProps } from '@/app/[locale]/(dashboard)/dashboard/page';
import { ExchangeRateOfCurrentCurreny } from './exchangeRate/ExchangeRate';
import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';
import { FlightBoard } from './flightBoard/FlightBoard';
import { FlightBoardResponse } from '@/app/api/dashboard/flightBoard/route';

export const DashboardPage = async (props: PageProps) => {
  const {
    params: { locale },
  } = props;
  const currentCurrenyDatas = await getExchangeRateData();
  const flightBoardDatas = await getFlightBoardData();

  return (
    <Dashboard.Container>
      {/* Flight 部分 */}
      <FlightBoard locale={locale} flightBoardDatas={flightBoardDatas} />
      {/* 為替レート 部分 */}
      <ExchangeRateOfCurrentCurreny
        locale={locale}
        currentCurrenyDatas={currentCurrenyDatas}
      />
    </Dashboard.Container>
  );
};

/**
 * exchangeRateに関するデータ取得
 */
const getExchangeRateData = async () => {
  const url = `${
    process.env.NEXT_PUBLIC_BASE_URL ?? process.env.VERCEL_API_BASE_URL
  }/dashboard/exchangeRate`;
  const exchangeData = await fetch(url);
  const data: CurrentCurrenyResponse = await exchangeData.json();
  return data;
};

/**
 * flightBoardDataに関するデータ取得
 */
const getFlightBoardData = async () => {
  const url = `${
    process.env.NEXT_PUBLIC_BASE_URL ?? process.env.VERCEL_API_BASE_URL
  }/dashboard/flightBoard`;
  const flightBoardData = await fetch(url);
  const data: FlightBoardResponse = await flightBoardData.json();
  return data;
};
