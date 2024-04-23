'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../components';
import { CurrentCurreny } from './currentCurreny/CurrenyCurreny';
import { Locales } from '@/types/locale';
import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';
import { ExchangeRateCalculator } from './calculator/ExchangeRateCalculator';
import { ExchangeRateGraph } from './graph/ExchangeRateGraph';
import { ExchangeRateMinMax } from './minMaxRate/ExchangeRateMinMax';

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
        <ExchangeRateMinMax
          panleLabel={t('minMax.label')}
          panelTitle={t('minMax.jpyTitle')}
          panelBottomInfoText={t('minMax.message')}
          max={{
            label: t('minMax.max'),
            value: currentCurrenyDatas['jpyCurrency']['exchangeRate']['min'],
          }}
          min={{
            label: t('minMax.min'),
            value: currentCurrenyDatas['jpyCurrency']['exchangeRate']['max'],
          }}
        />
        <ExchangeRateMinMax
          panleLabel={t('minMax.label')}
          panelTitle={t('minMax.krwTitle')}
          panelBottomInfoText={t('minMax.message')}
          max={{
            label: t('minMax.max'),
            value: currentCurrenyDatas['krwCurrency']['exchangeRate']['min'],
          }}
          min={{
            label: t('minMax.min'),
            value: currentCurrenyDatas['krwCurrency']['exchangeRate']['max'],
          }}
        />
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
