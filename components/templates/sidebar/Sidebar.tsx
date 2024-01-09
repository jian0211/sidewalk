'use client';

import * as stylex from '@stylexjs/stylex';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import '@/hooks/useInjectStyleX';
import {
  AccordionMenu,
  Logo,
  SidebarAccordion,
  SidebarMenuContainer,
  SidebarContainer,
  SidebarTitle,
} from '../../organisms/sidebar/SidebarMenu';
import { useSideBarPath } from './useCurrentPath';

const Sidebar = () => {
  const t = useTranslatedWord('sidebar');
  // const { locale } = useCurrentLocale();
  const locale = '';
  const { isCurrentPage } = useSideBarPath();
  return (
    <SidebarContainer>
      <Logo />
      <SidebarMenuContainer>
        <SidebarTitle>{t('home.title')}</SidebarTitle>
        <SidebarAccordion
          title={t('airports.title')}
          isCurrentPage={isCurrentPage('airports')}
        >
          <AccordionMenu
            href={`${locale}/airports`}
            text={t('airports.categories.airportsList')}
          />
          <AccordionMenu
            href={`${locale}/airports/schedule`}
            text={t('airports.categories.airportsSchedule')}
          />
        </SidebarAccordion>
        <SidebarAccordion
          title={t('airlines.title')}
          isCurrentPage={isCurrentPage('airlines')}
        >
          <AccordionMenu
            href={`${locale}/airlines`}
            text={t('airlines.categories.airlinesList')}
          />
          <AccordionMenu
            href={`${locale}/airlines/schedule`}
            text={t('airlines.categories.arilinesSchedule')}
          />
        </SidebarAccordion>
      </SidebarMenuContainer>
      <div {...stylex.props(styles.bottomMenu)}>
        <div>Aboutme</div>
        <div>login/out</div>
        <div>footer</div>
      </div>
    </SidebarContainer>
  );
};

const styles = stylex.create({
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
