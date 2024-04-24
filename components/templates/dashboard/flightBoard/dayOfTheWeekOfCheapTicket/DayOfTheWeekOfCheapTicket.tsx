import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { PriceRange, usePriceRange } from './usePriceRange';

type Days = 'mon' | 'tue' | 'wen' | 'thr' | 'fri' | 'sat' | 'sun';
type DayOfTheWeekOfCheapTicketProps = {
  cheapDay: {
    toKorea: Days;
    toJapan: Days;
  };
  expensiveDay: {
    toKorea: Days;
    toJapan: Days;
  };
} & React.ComponentProps<'div'>;

export const DayOfTheWeekOfCheapTicket = (
  props: DayOfTheWeekOfCheapTicketProps,
) => {
  const { cheapDay, expensiveDay, ...rest } = props;
  const { states, actions } = usePriceRange();
  const t = useTranslatedWord('dashboard.flight.cheapTicket');
  const t_WEEK = {
    mon: t(`week.mon`),
    tue: t(`week.tue`),
    wen: t(`week.wen`),
    thr: t(`week.thr`),
    fri: t(`week.fri`),
    sat: t(`week.sat`),
    sun: t(`week.mon`),
  };
  const t_RANGE_COMMENT = {
    cheap: t('cheapComment'),
    expensive: t('expensiveComment'),
  };
  const priceRangeDay = (destination: 'toKorea' | 'toJapan') => ({
    cheap: cheapDay[destination],
    expensive: expensiveDay[destination],
  });

  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={t('label')}>
      <Dashboard.PanelHeader>
        <Dashboard.RadioGroup
          groupName="priceOrder"
          theme="borderRadius"
          currentValue={states['priceRange']}
          handleChange={(value) =>
            actions['setPriceRange'](value as PriceRange)
          }
          items={[
            { label: t('cheap'), value: 'cheap' },
            { label: t('expensive'), value: 'expensive' },
          ]}
        />
        <Dashboard.PanelTitle>{t('title')}</Dashboard.PanelTitle>
      </Dashboard.PanelHeader>

      <Dashboard.PanelBody>
        <Dashboard.P>
          <Dashboard.Text fontSize="medium" fontWeight="bold">
            {t('toKorea')}
          </Dashboard.Text>
          <Dashboard.Text color="brightGreen" fontWeight="bold">
            {t_WEEK[priceRangeDay[states['priceRange']]]}
          </Dashboard.Text>
          <Dashboard.Text>
            {t_RANGE_COMMENT[states['priceRange']]}
          </Dashboard.Text>
        </Dashboard.P>
        <Dashboard.P>
          <Dashboard.Text fontSize="medium" fontWeight="bold">
            {t('toJapan')}
          </Dashboard.Text>
          <Dashboard.Text fontWeight="bold" color="brightGreen">
            {t_WEEK[priceRangeDay[states['priceRange']]]}
          </Dashboard.Text>
          <Dashboard.Text>
            {t_RANGE_COMMENT[states['priceRange']]}
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
