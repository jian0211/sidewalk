import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { Images } from '@/components/atoms/Image';
import { useCheapestTicketTommorrow } from './useCheapestTicketTommorrow';
import { Icons } from '@/components/atoms/Icon';

type cheapestTicketInfo = {
  cheapestTicketInfo: {
    toKorea: {
      currency: string;
      imageTitle: string;
      fee: number;
      from: {
        iata: string;
        time: string;
      };
      to: {
        iata: string;
        time: string;
      };
    };
    toJapan: {
      currency: string;
      imageTitle: string;
      fee: number;
      from: {
        iata: string;
        time: string;
      };
      to: {
        iata: string;
        time: string;
      };
    };
  };
};
type CheapestTicketTomorrowProps = cheapestTicketInfo &
  React.ComponentProps<'div'>;

export const CheapestTicketTomorrow = (props: CheapestTicketTomorrowProps) => {
  const { cheapestTicketInfo, ...rest } = props;
  const t = useTranslatedWord('dashboard.flight.cheapestTicketTomorrow');
  const { states, actions } = useCheapestTicketTommorrow();
  const currency =
    cheapestTicketInfo[states.destination].currency === 'jpy' ? '円' : '원';

  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={t('label')}>
      <Dashboard.PanelHeader>
        <Dashboard.PanelTitle>{t('title')}</Dashboard.PanelTitle>
        <Dashboard.RadioGroup
          groupName="destination"
          theme="borderRadius"
          currentValue={states.destination}
          handleChange={(value) => actions.setDestination(value)}
          items={[
            { label: t('toKorea'), value: 'toKorea' },
            { label: t('toJapan'), value: 'toJapan' },
          ]}
        />
      </Dashboard.PanelHeader>

      <Dashboard.PanelBody gap="1rem">
        <Dashboard.P>
          <Dashboard.Text
            fontSize="small"
            fontWeight="bold"
            color="brightOrange"
          >
            {cheapestTicketInfo[states.destination]['from']['iata']}
          </Dashboard.Text>
          <Dashboard.Text fontSize="small" marginRight="auto">
            {cheapestTicketInfo[states.destination]['from']['time']}
          </Dashboard.Text>
          <Icons src="IconArrowRight" />
          <Dashboard.Text
            fontSize="small"
            fontWeight="bold"
            color="brightOrange"
            marginLeft="auto"
          >
            {cheapestTicketInfo[states.destination]['to']['iata']}
          </Dashboard.Text>
          <Dashboard.Text fontSize="small">
            {cheapestTicketInfo[states.destination]['to']['time']}
          </Dashboard.Text>
        </Dashboard.P>
        <Dashboard.P>
          <Images
            imageTitle={cheapestTicketInfo[states.destination]['imageTitle']}
            width={120}
          />
          <Dashboard.Text fontSize="large" fontWeight="bold" marginLeft="auto">
            {cheapestTicketInfo[states.destination]['fee']}
            {currency}
          </Dashboard.Text>
        </Dashboard.P>
      </Dashboard.PanelBody>
    </Dashboard.Panel>
  );
};
