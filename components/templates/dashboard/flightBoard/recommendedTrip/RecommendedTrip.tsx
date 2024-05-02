import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';

type RecommendedTripProps = React.ComponentProps<'div'>;

export const RecommendedTrip = (props: RecommendedTripProps) => {
  const { ...rest } = props;
  const t = useTranslatedWord('dashboard.flight.recommendedTrip');

  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={t('label')}>
      <Dashboard.PanelHeader>
        <Dashboard.PanelTitle>{t('title')}</Dashboard.PanelTitle>
      </Dashboard.PanelHeader>

      <Dashboard.PanelBody>
        <Dashboard.P>
          <Dashboard.Text fontSize="medium" fontWeight="bold"></Dashboard.Text>
          <Dashboard.Text
            color="brightGreen"
            fontWeight="bold"
          ></Dashboard.Text>
        </Dashboard.P>

        <Dashboard.P>
          <Dashboard.Text fontSize="medium" fontWeight="bold">
            京都
          </Dashboard.Text>
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
