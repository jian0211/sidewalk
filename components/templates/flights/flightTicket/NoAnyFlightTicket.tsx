import { Flex } from '@/components/atoms/Flex';
import { Text } from '@/components/atoms/text/Text';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

type NoAnyFlightTicketProps = React.ComponentProps<'div'>;

export const NoAnyFlightTicket = (props: NoAnyFlightTicketProps) => {
  const t = useTranslatedWord('flights.notFound');
  return (
    <Flex
      {...props}
      flexProps={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      sizeProps={{ height: '100%' }}
    >
      <Text
        colorProps={{ color: 'brightOrange' }}
        fontProps={{ fontSize: 'medium', fontWeight: 'bold' }}
      >
        {t('ticket')}
      </Text>
    </Flex>
  );
};
