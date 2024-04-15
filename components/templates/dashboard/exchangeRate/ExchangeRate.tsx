'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../components';
import { Suspense } from 'react';
import {
  CurrentCurreny,
  CurrentCurrenyFallback,
} from './currentCurreny/CurrenyCurreny';
import { Locales } from '@/types/locale';
import { ExchangeRate } from './components';
import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';

type ExchangeRatePartsProps = {
  locale: Locales;
  currentCurrenyDatas: CurrentCurrenyResponse;
};
export const ExchangeRateOfCurrentCurreny = async (
  props: ExchangeRatePartsProps,
) => {
  const { locale, currentCurrenyDatas } = props;
  const t = useTranslatedWord('dashboard.exchangeRate');
  return (
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
  );
};
