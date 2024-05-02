import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { Locales } from '@/types/locale';

type ParentDataProps = {
  locale: Locales;
  averagePriceOfFlight: {
    toKorea: {
      jpy: number;
      krw: number;
    };
    toJapan: {
      jpy: number;
      krw: number;
    };
  };
};
type AveragePriceOfFlightTicketProps = ParentDataProps &
  React.ComponentProps<'div'>;

export const AveragePriceOfFlightTicket = (
  props: AveragePriceOfFlightTicketProps,
) => {
  const { locale, averagePriceOfFlight, ...rest } = props;
  const CURRENCY_UNIT: Record<Locales, '円' | '₩'> = { ja: '円', ko: '₩' };
  const CURRENCY: Record<Locales, 'jpy' | 'krw'> = { ja: 'jpy', ko: 'krw' };
  const t = useTranslatedWord('dashboard.flight.averagePrice');

  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={t('label')}>
      <Dashboard.PanelHeader>
        <Dashboard.PanelTitle>{t('title')}</Dashboard.PanelTitle>
      </Dashboard.PanelHeader>
      <Dashboard.PanelBody>
        <Dashboard.P>
          <Dashboard.Text fontSize="medium" fontWeight="bold">
            {t('toKorea')}
          </Dashboard.Text>
          <Dashboard.Text>{t('average')}</Dashboard.Text>
          <Dashboard.Text color="mutedOlive">
            {averagePriceOfFlight['toKorea'][CURRENCY[locale]] +
              CURRENCY_UNIT[locale]}
          </Dashboard.Text>
        </Dashboard.P>
        <Dashboard.P>
          <Dashboard.Text fontSize="medium" fontWeight="bold">
            {t('toJapan')}
          </Dashboard.Text>
          <Dashboard.Text>{t('average')}</Dashboard.Text>
          <Dashboard.Text color="mutedOlive">
            {averagePriceOfFlight['toJapan'][CURRENCY[locale]] +
              CURRENCY_UNIT[locale]}
          </Dashboard.Text>
        </Dashboard.P>
      </Dashboard.PanelBody>
      <Dashboard.PanelBottom>
        <Dashboard.Text fontSize="xsmall" color="brightOrange">
          {t('message')}
        </Dashboard.Text>
      </Dashboard.PanelBottom>
    </Dashboard.Panel>
  );
};
