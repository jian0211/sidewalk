import * as stylex from '@stylexjs/stylex';
import Accordion from '../organisms/Accordion';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { H1 } from '../atoms/Heading';
import '@/hooks/useInjectStyleX';

const Sidebar = () => {
  const t = useTranslatedWord('sidebar');
  return (
    <aside {...stylex.props(styles.aside)}>
      <div {...stylex.props(styles.logo)}>
        <div>logo</div>
      </div>
      <div>
        <H1>{t('home.title')}</H1>
        <Accordion title={t('airports.title')}>
          <p>{t('airports.categories.airportsList')}</p>
          <p>{t('airports.categories.airportsSchedule')}</p>
        </Accordion>
        <Accordion title={t('airlines.title')}>
          <p>{t('airlines.categories.airlinesList')}</p>
          <p>{t('airlines.categories.arilinesSchedule')}</p>
        </Accordion>
      </div>
      <div {...stylex.props(styles.bottomMenu)}>
        <div>Aboutme</div>
        <div>login/out</div>
        <div>footer</div>
      </div>
    </aside>
  );
};

const styles = stylex.create({
  aside: {
    width: '100%',
    maxWidth: '20rem',
    height: '100vh',
    backgroundColor: '#F5F5F9',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: '100%',
    height: '5rem',
    // border: '1px solid red',
  },
  bottomMenu: {
    width: '100%',
    backgroundColor: 'yellow',
    marginTop: 'auto',
  },
});

export default Sidebar;
