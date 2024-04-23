import React from 'react';
import { Dashboard } from '../../components';
import { CurrenyType } from '@/app/api/dashboard/exchangeRate/route';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { useCurrentCurreny } from './useCurrentCurreny';
import { Locales } from '@/types/locale';

export type CurrentCurrenyProps = {
  currenyType: 'krw' | 'jpy';
  locale: Locales;
  currentCurrenyData: CurrenyType;
} & React.ComponentProps<'div'>;

export const CurrentCurrenyFallback = () => {
  return <Dashboard.Panel theme="rectangle" title="..." />;
};

export const CurrentCurreny = (props: CurrentCurrenyProps) => {
  const { currenyType, currentCurrenyData, locale, ...rest } = props;
  const t = useTranslatedWord('dashboard.exchangeRate.currentCurreny');
  const { states, actions } = useCurrentCurreny();

  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={t('title') + ''}>
      <Dashboard.PanelHeader>
        <Dashboard.PanelTitle>
          {states.panelTitle[currenyType]}
        </Dashboard.PanelTitle>
        <Dashboard.Text fontSize="xsmall" color="mutedOlive">
          {currentCurrenyData.standardCurrency +
            '/' +
            currenyType.toUpperCase()}
        </Dashboard.Text>
      </Dashboard.PanelHeader>
      <Dashboard.PanelBody>
        <Dashboard.P>
          <Dashboard.Text fontSize="large" fontWeight="bold">
            {currentCurrenyData.quote.toFixed(2)}
          </Dashboard.Text>
          <Dashboard.Text
            color={
              actions.isNegative(Number(currentCurrenyData.rateOfChange))
                ? 'vividRed'
                : 'brightGreen'
            }
          >
            {currentCurrenyData.rateOfChange}
          </Dashboard.Text>
        </Dashboard.P>
      </Dashboard.PanelBody>
      <Dashboard.PanelBottom>
        <Dashboard.IconWithText colorProps={{ color: 'brightOrange' }}>
          {t('updatedTime') + ' '}
          {actions.formattedDate(currentCurrenyData.timestamp, locale)}
        </Dashboard.IconWithText>
      </Dashboard.PanelBottom>
    </Dashboard.Panel>
  );
};
