'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../components';
import { CurrentCurreny } from './currentCurreny/CurrenyCurreny';
import { Locales } from '@/types/locale';
import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';
import { ExchangeRateCalculator } from './calculator/ExchangeRateCalculator';
import { ExchangeRateGraph } from './graph/ExchangeRateGraph';

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
        <Dashboard.VerticalRotationIcon />
        <Dashboard.ArticleHeaderTitle>
          {t('mainTitle')}
        </Dashboard.ArticleHeaderTitle>
      </Dashboard.ArticleHeader>
      <Dashboard.ArticleBody>
        <CurrentCurreny
          currenyType="krw"
          currentCurrenyData={currentCurrenyDatas.krwCurrency}
          locale={locale}
        />
        <CurrentCurreny
          currenyType="jpy"
          currentCurrenyData={currentCurrenyDatas.jpyCurrency}
          locale={locale}
        />
        <Dashboard.Panel theme="rectangle" title="oneTiotle">
          <h3>Some Content</h3>
        </Dashboard.Panel>
        <Dashboard.Panel theme="rectangle" title="oneTiotle">
          <h3>Some Content</h3>
        </Dashboard.Panel>
        <ExchangeRateCalculator
          curreny={{
            krw: currentCurrenyDatas.krwCurrency.quote,
            jpy: currentCurrenyDatas.jpyCurrency.quote,
          }}
        />
        <ExchangeRateGraph
          currenyGraphData={currentCurrenyDatas.currenyGraphData}
        />
      </Dashboard.ArticleBody>
    </Dashboard.Article>
  );
};
