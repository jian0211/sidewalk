import { Dashboard } from './components';
import { PageProps } from '@/app/[locale]/(dashboard)/dashboard/page';
import { ExchangeRateOfCurrentCurreny } from './exchangeRate/ExchangeRate';
import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';

export const DashboardPage = async (props: PageProps) => {
  const {
    params: { locale },
  } = props;
  const currentCurrenyDatas = await getExchangeRateData();

  return (
    <Dashboard.Container>
      {/* 為替レート 部分 */}
      <ExchangeRateOfCurrentCurreny
        locale={locale}
        currentCurrenyDatas={currentCurrenyDatas}
      />
    </Dashboard.Container>
  );
};

const getExchangeRateData = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/exchangeRate`;
  const exchangeData = await fetch(url);
  const data: CurrentCurrenyResponse = await exchangeData.json();
  return data;
};
