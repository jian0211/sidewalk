import * as stylex from '@stylexjs/stylex';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import '@/hooks/useInjectStyleX';
import { SidebarAccordion, SidebarTitle } from '../organisms/SideBarMenu';

const Sidebar = () => {
  const t = useTranslatedWord('sidebar');
  return (
    <aside {...stylex.props(styles.aside)}>
      <div {...stylex.props(styles.logo)}>
        <div>logo</div>
      </div>
      <div>
        <SidebarTitle>{t('home.title')}</SidebarTitle>
        <SidebarAccordion title={t('airports.title')}>
          <p>{t('airports.categories.airportsList')}</p>
          <p>{t('airports.categories.airportsSchedule')}</p>
        </SidebarAccordion>
        <SidebarAccordion title={t('airlines.title')}>
          <p>{t('airlines.categories.airlinesList')}</p>
          <p>{t('airlines.categories.arilinesSchedule')}</p>
        </SidebarAccordion>
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
