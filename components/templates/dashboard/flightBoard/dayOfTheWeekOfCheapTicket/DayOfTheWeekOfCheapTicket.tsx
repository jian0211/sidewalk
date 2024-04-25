import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { PriceRange, usePriceRangeSelecter } from './usePriceRange';

export type Destination = 'toKorea' | 'toJapan';
type Days = 'mon' | 'tue' | 'wen' | 'thr' | 'fri' | 'sat' | 'sun';
type DayOfTheWeekOfCheapTicketProps = {
  [k in 'cheapDay' | 'expensiveDay']: { [k in Destination]: Days };
} & React.ComponentProps<'div'>;

export const DayOfTheWeekOfCheapTicket = (
  props: DayOfTheWeekOfCheapTicketProps,
) => {
  const { cheapDay, expensiveDay, ...rest } = props;
  const {
    states: { priceRangeSelecter },
    actions: { setPriceRangeSelecter },
  } = usePriceRangeSelecter();
  const t = useTranslatedWord('dashboard.flight.cheapTicket');

  /**
   * 曜日により、翻訳されたメッセージを取得
   */
  const t_WEEK: Record<Days, string> = {
    mon: t(`week.mon`),
    tue: t(`week.tue`),
    wen: t(`week.wen`),
    thr: t(`week.thr`),
    fri: t(`week.fri`),
    sat: t(`week.sat`),
    sun: t(`week.mon`),
  };

  const t_RANGE_COMMENT: Record<PriceRange, string> = {
    cheap: t('cheapComment'),
    expensive: t('expensiveComment'),
  };

  const priceRangeDay = (destination: Destination) => ({
    cheap: cheapDay[destination],
    expensive: expensiveDay[destination],
  });

  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={t('label')}>
      <Dashboard.PanelHeader>
        <Dashboard.RadioGroup
          groupName="priceOrder"
          theme="borderRadius"
          currentValue={priceRangeSelecter}
          handleChange={(value) => setPriceRangeSelecter(value as PriceRange)}
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
            {t_WEEK[priceRangeDay('toKorea')[priceRangeSelecter]]}
          </Dashboard.Text>
          <Dashboard.Text>{t_RANGE_COMMENT[priceRangeSelecter]}</Dashboard.Text>
        </Dashboard.P>

        <Dashboard.P>
          <Dashboard.Text fontSize="medium" fontWeight="bold">
            {t('toJapan')}
          </Dashboard.Text>
          <Dashboard.Text fontWeight="bold" color="brightGreen">
            {t_WEEK[priceRangeDay('toJapan')[priceRangeSelecter]]}
          </Dashboard.Text>
          <Dashboard.Text>{t_RANGE_COMMENT[priceRangeSelecter]}</Dashboard.Text>
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
