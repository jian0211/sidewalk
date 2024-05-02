import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { Images } from '@/components/atoms/Image';
import { useCheapestTicketTommorrow } from './useCheapestTicketTommorrow';
import { Icons } from '@/components/atoms/Icon';
import { FlightBoardResponse } from '@/app/api/dashboard/flightBoard/route';
import { Locales } from '@/types/locale';
import { Flex } from '@/components/atoms/Flex';

type CheapestTicketTomorrowProps = {
  cheapestTicketTomorrow: FlightBoardResponse['cheapestTicketTomorrow'];
  locale: Locales;
} & React.ComponentProps<'div'>;
type Currency =
  keyof FlightBoardResponse['cheapestTicketTomorrow']['toJapan']['price'];

type AirportTitle = keyof Pick<
  FlightBoardResponse['cheapestTicketTomorrow']['toJapan']['from'],
  'koTitle' | 'jaTitle'
>;

export const CheapestTicketTomorrow = (props: CheapestTicketTomorrowProps) => {
  const { cheapestTicketTomorrow, locale, ...rest } = props;
  const t = useTranslatedWord('dashboard.flight.cheapestTicketTomorrow');
  const { states, actions } = useCheapestTicketTommorrow();
  const localeToCurrency: Record<Locales, Currency> = { ja: 'jpy', ko: 'krw' };
  const localeToAirportTitle: Record<Locales, AirportTitle> = {
    ja: 'jaTitle',
    ko: 'koTitle',
  };
  const currency = locale === 'ja' ? '円' : '원';

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
        <Flex
          flexProps={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          sizeProps={{
            width: '100%',
          }}
        >
          <Flex>
            <Dashboard.Text
              fontSize="small"
              fontWeight="bold"
              color="brightOrange"
            >
              {
                cheapestTicketTomorrow[states.destination]['from'][
                  localeToAirportTitle[locale]
                ]
              }
            </Dashboard.Text>
            <Dashboard.P>
              <Dashboard.Text
                fontSize="small"
                fontWeight="bold"
                color="brightOrange"
              >
                {cheapestTicketTomorrow[states.destination]['from']['iata']}
              </Dashboard.Text>
              <Dashboard.Text fontSize="small" marginRight="auto">
                {cheapestTicketTomorrow[states.destination]['from']['time']}
              </Dashboard.Text>
            </Dashboard.P>
          </Flex>

          <Icons src="IconArrowRight" />

          <Flex>
            <Dashboard.Text
              fontSize="small"
              fontWeight="bold"
              color="brightOrange"
            >
              {
                cheapestTicketTomorrow[states.destination]['to'][
                  localeToAirportTitle[locale]
                ]
              }
            </Dashboard.Text>
            <Dashboard.P>
              <Dashboard.Text
                fontSize="small"
                fontWeight="bold"
                color="brightOrange"
                marginLeft="auto"
              >
                {cheapestTicketTomorrow[states.destination]['to']['iata']}
              </Dashboard.Text>
              <Dashboard.Text fontSize="small">
                {cheapestTicketTomorrow[states.destination]['to']['time']}
              </Dashboard.Text>
            </Dashboard.P>
          </Flex>
        </Flex>

        <Dashboard.P>
          <Images
            imageTitle={
              cheapestTicketTomorrow[states.destination]['imageTitle']
            }
            width={120}
          />
          <Dashboard.Text fontSize="large" fontWeight="bold" marginLeft="auto">
            {
              cheapestTicketTomorrow[states.destination]['price'][
                localeToCurrency[locale]
              ]
            }
            {currency}
          </Dashboard.Text>
        </Dashboard.P>
      </Dashboard.PanelBody>
    </Dashboard.Panel>
  );
};
