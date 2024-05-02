import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { Flex } from '@/components/atoms/Flex';
import { Icons } from '@/components/atoms/Icon';
import { Images, ImagesProps } from '@/components/atoms/Image';
import { Locales } from '@/types/locale';
import { useCheapestTicketInfo } from './useCheapestTicketInfo';
import {
  FlightBoardResponse,
  TripType,
} from '@/app/api/dashboard/flightBoard/route';

type CheapestTicketInfoProps = {
  locale: Locales;
  cheapestTicketInfoData: FlightBoardResponse['cheapestTicketInfoData'];
} & React.ComponentProps<'div'>;
type BackgroundImgProps = ImagesProps;

export const CheapestTicketInfo = (props: CheapestTicketInfoProps) => {
  const { cheapestTicketInfoData, locale, ...rest } = props;
  const t = useTranslatedWord('dashboard.flight.cheapTicketInfo');
  const {
    states: { title, imageSrc, from, to, fee, tripType },
    actions: { handleSearchingFlight },
  } = useCheapestTicketInfo(cheapestTicketInfoData);
  const t_TripType: Record<TripType, string> = {
    roundTrip: t('roundTrip'),
    oneWay: t('oneWay'),
  };
  return (
    <Dashboard.Panel {...rest} theme="square" title={t('label')}>
      <Dashboard.PanelHeader>
        <Dashboard.PanelTitle>{title(locale)}</Dashboard.PanelTitle>
      </Dashboard.PanelHeader>

      <Dashboard.PanelBody gap="10px">
        <BackgroundImg imageTitle={imageSrc} width={320} />
        <Flex
          flexProps={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'large',
          }}
        >
          <Images imageTitle={from['airlineImage']} width={80} />
          <Flex>
            <Dashboard.P>
              <Dashboard.Text fontSize="xsmall">{from['date']}</Dashboard.Text>
              <Dashboard.Text fontSize="xsmall" marginLeft="auto">
                {t_TripType[tripType]}
              </Dashboard.Text>
            </Dashboard.P>
            <Dashboard.Text color="baseGray" fontSize="xxsmall">
              {from['info'](locale)}
            </Dashboard.Text>
          </Flex>
        </Flex>

        <Flex
          flexProps={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'large',
          }}
        >
          <Images
            imageTitle={cheapestTicketInfoData['to']['airline']['imageSrc']}
            width={80}
          />
          <Flex>
            <Dashboard.P>
              <Dashboard.Text fontSize="xsmall">{to['date']}</Dashboard.Text>
              <Dashboard.Text fontSize="xsmall" marginLeft="auto">
                {t_TripType[tripType]}
              </Dashboard.Text>
            </Dashboard.P>
            <Dashboard.Text color="baseGray" fontSize="xxsmall">
              {to['info'](locale)}
            </Dashboard.Text>
          </Flex>
        </Flex>
      </Dashboard.PanelBody>

      <Dashboard.PanelBottom>
        <Flex flexProps={{ flexDirection: 'row', alignItems: 'center' }}>
          <Dashboard.Text
            marginLeft="auto"
            marginRight="10px"
            color="brightGreen"
            usePointer
            onClick={() => handleSearchingFlight()}
          >
            {fee(locale, t('go'))}
          </Dashboard.Text>
          <Icons src="IconRightCircle" />
        </Flex>
      </Dashboard.PanelBottom>
    </Dashboard.Panel>
  );
};

const BackgroundImg = (props: BackgroundImgProps) => {
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        overflow: 'hidden',
        borderRadius: '1vw',
      }}
    >
      <Images {...props} />
    </div>
  );
};
