import { B } from '@/components/atoms/text/Text';
import Image from 'next/image';
import * as stylex from '@stylexjs/stylex';
import worriedPlaneImage from '@/public/images/worried-plane.png';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import {
  fontSizing,
  fontWeight,
  palette,
} from '../../../../styles/globalTokens.stylex';
import { Flights } from '../components';

type NoFlightDataProps = React.ComponentProps<'div'>;

export const NoFlightData = (props: NoFlightDataProps) => {
  const t = useTranslatedWord('flights.nodata');
  return (
    <Flights.Wrapper {...props} xstyle={styles['noData']}>
      <Image
        src={worriedPlaneImage}
        alt="worriedPlane"
        width={400}
        style={{ borderRadius: '50%' }}
      />
      <B
        fontProps={{
          fontSize: 'large',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        {t('message')}
      </B>
      <p {...stylex.props(styles['helpMessage'])}>{t('helpMessage')}</p>
    </Flights.Wrapper>
  );
};

const styles = stylex.create({
  noData: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
  },
  helpMessage: {
    position: 'absolute',
    bottom: '2rem',
    fontSize: fontSizing['xsmall'],
    fontWeight: fontWeight['bold'],
    color: palette['brightOrange'],
  },
});
