'use client';

import { Dashboard } from './components';
import { ExchangeRate } from './exchangeRate/ExchangeRate';
import { PageProps } from '@/app/[locale]/(dashboard)/dashboard/page';
import { useExchangeRate } from './exchangeRate/useExchangeRate';

export const DashboardPage = (props: PageProps) => {
  const {
    params: { locale },
  } = props;
  const data = useExchangeRate();
  return (
    <Dashboard.Container>
      <Dashboard.Article>
        <Dashboard.Panel theme="rectangle" title="現在の為替">
          <Dashboard.PanelTitle>円</Dashboard.PanelTitle>
          <Dashboard.PanelBody>
            <Dashboard.Paragraph>
              <Dashboard.Text fontSize="large" fontWeight="bold">
                12.123
              </Dashboard.Text>
              <Dashboard.Text color="vividRed">+1.30</Dashboard.Text>
            </Dashboard.Paragraph>
          </Dashboard.PanelBody>
          <Dashboard.PanelBottom>
            <Dashboard.IconWithText colorProps={{ color: 'brightOrange' }}>
              実時間データ・15:56:59
            </Dashboard.IconWithText>
          </Dashboard.PanelBottom>
        </Dashboard.Panel>
        <Dashboard.Panel theme="rectangle" title="oneTiotle">
          <h3>two</h3>
        </Dashboard.Panel>
        <Dashboard.Panel theme="rectangle" title="oneTiotle">
          <h3>three</h3>
        </Dashboard.Panel>
        <Dashboard.Panel theme="rectangle" title="oneTiotle">
          <h3>four</h3>
        </Dashboard.Panel>
        <Dashboard.Panel theme="square" title="oneTiotle" />
        <Dashboard.Panel theme="graph" title="為替レートグラフ">
          <ExchangeRate.Nav>
            <div>
              <span>색 일본</span>
              <span>색 한국</span>
            </div>
            <div>
              <span>年</span>
              <span>月</span>
              <span>日</span>
            </div>
          </ExchangeRate.Nav>
          <ExchangeRate.Graph />
        </Dashboard.Panel>
      </Dashboard.Article>
    </Dashboard.Container>
  );
};
