'use client';

import { Dashboard } from './components';
import { ExchangeRate } from './exchangeRate/ExchangeRate';
import { PageProps } from '@/app/[locale]/(dashboard)/dashboard/page';
import { Suspense } from 'react';
import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';
import {
  CurrentCurreny,
  CurrentCurrenyFallback,
} from './exchangeRate/currentCurreny/CurrenyCurreny';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

export const DashboardPage = async (props: PageProps) => {
  const {
    params: { locale },
  } = props;
  const t = useTranslatedWord('dashboard.exchangeRate');
  const currentCurrenyDatas = await getExchangeRateData();
  return (
    <Dashboard.Container>
      {/* 為替レート 部分 */}
      <Dashboard.Article>
        <Dashboard.ArticleHeader>
          <ExchangeRate.VerticalRotationIcon />
          <Dashboard.ArticleHeaderTitle>
            {t('mainTitle')}
          </Dashboard.ArticleHeaderTitle>
        </Dashboard.ArticleHeader>
        <Dashboard.ArticleBody>
          <Suspense fallback={<CurrentCurrenyFallback />}>
            <CurrentCurreny
              currenyType="krw"
              currentCurrenyData={currentCurrenyDatas.krwCurrency}
              locale={locale}
            />
          </Suspense>
          <Suspense fallback={<CurrentCurrenyFallback />}>
            <CurrentCurreny
              currenyType="jpy"
              currentCurrenyData={currentCurrenyDatas.jpyCurrency}
              locale={locale}
            />
          </Suspense>
          <Dashboard.Panel theme="rectangle" title="oneTiotle">
            <h3>three</h3>
          </Dashboard.Panel>
          <Dashboard.Panel theme="rectangle" title="oneTiotle">
            <h3>four</h3>
          </Dashboard.Panel>
          <Dashboard.Panel theme="square" title="oneTiotle" />
          <Dashboard.Panel theme="graph" title="為替レートグラフ">
            <ExchangeRate.GraphNav>
              <div>
                <span>색 일본</span>
                <span>색 한국</span>
              </div>
              <div>
                <span>年</span>
                <span>月</span>
                <span>日</span>
              </div>
            </ExchangeRate.GraphNav>
            <ExchangeRate.Graph />
          </Dashboard.Panel>
        </Dashboard.ArticleBody>
      </Dashboard.Article>
    </Dashboard.Container>
  );
};

const getExchangeRateData = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/exchangeRate`;
  const exchangeData = await fetch(url);
  const data: CurrentCurrenyResponse = await exchangeData.json();
  return data;
};
