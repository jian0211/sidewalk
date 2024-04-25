import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { Destination } from '../dayOfTheWeekOfCheapTicket/DayOfTheWeekOfCheapTicket';
import { useState } from 'react';
import { Images } from '@/components/atoms/Image';

type CheapestTicketTomorrowProps = React.ComponentProps<'div'>;
export const CheapestTicketTomorrow = (props: CheapestTicketTomorrowProps) => {
  const { ...rest } = props;
  const t = useTranslatedWord('dashboard.flight.cheapestTicketTomorrow');
  const [destination, setDestination] = useState<Destination>('toJapan');

  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={t('label')}>
      <Dashboard.PanelHeader>
        <Dashboard.PanelTitle>{t('title')}</Dashboard.PanelTitle>
        <Dashboard.RadioGroup
          groupName="destination"
          theme="borderRadius"
          currentValue={destination}
          handleChange={(value) => setDestination(value as Destination)}
          items={[
            { label: t('toKorea'), value: 'toKorea' },
            { label: t('toJapan'), value: 'toJapan' },
          ]}
        />
      </Dashboard.PanelHeader>

      <Dashboard.PanelBody>
        <Dashboard.P>
          <Dashboard.Text fontSize="medium">130000원</Dashboard.Text>
        </Dashboard.P>
        <Dashboard.P>
          <Images imageTitle="" width={100} />
          <Dashboard.Text fontSize="medium">NRT</Dashboard.Text>
          <Dashboard.Text fontSize="medium">Incheon</Dashboard.Text>
        </Dashboard.P>
      </Dashboard.PanelBody>

      {/* <Dashboard.PanelBottom>
        <Dashboard.Text fontSize="xsmall" color="brightOrange">
          {t('message')}
        </Dashboard.Text>
      </Dashboard.PanelBottom> */}
    </Dashboard.Panel>
  );
};
