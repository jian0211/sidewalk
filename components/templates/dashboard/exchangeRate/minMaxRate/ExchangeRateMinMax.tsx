import { Flex } from '@/components/atoms/Flex';
import { Dashboard } from '../../components';

type ExchangeRateMinMaxProps = {
  panleLabel: string;
  panelTitle: string;
  panelBottomInfoText: string;
  min: {
    label: string;
    value: string | number;
  };
  max: {
    label: string;
    value: string | number;
  };
} & React.ComponentProps<'div'>;

export const ExchangeRateMinMax = (props: ExchangeRateMinMaxProps) => {
  const { panleLabel, panelTitle, panelBottomInfoText, min, max, ...rest } =
    props;
  return (
    <Dashboard.Panel {...rest} theme="rectangle" title={panleLabel}>
      <Dashboard.PanelHeader>
        <Dashboard.PanelTitle>{panelTitle}</Dashboard.PanelTitle>
      </Dashboard.PanelHeader>
      <Dashboard.PanelBody>
        <Flex
          flexProps={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'small',
          }}
        >
          <Dashboard.Label>{min.label}</Dashboard.Label>
          <Dashboard.P>{min.value}</Dashboard.P>
        </Flex>
        <Flex
          flexProps={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'small',
          }}
        >
          <Dashboard.Label>{max.label}</Dashboard.Label>
          <Dashboard.P>{max.value}</Dashboard.P>
        </Flex>
      </Dashboard.PanelBody>
      <Dashboard.PanelBottom>
        <Dashboard.Text
          fontSize="xsmall"
          fontWeight="medium"
          color="brightOrange"
        >
          {panelBottomInfoText}
        </Dashboard.Text>
      </Dashboard.PanelBottom>
    </Dashboard.Panel>
  );
};
