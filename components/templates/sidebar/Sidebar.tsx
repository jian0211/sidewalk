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
  HomeLink,
} from '../../organisms/sidebar/SidebarMenu';
import { useSideBarPath } from './useCurrentPath';

const Sidebar = () => {
  const t = useTranslatedWord('sidebar');
  // const { locale } = useCurrentLocale();
  const locale = '/ja'; // [TODO] change
  const { path, isCurrentPage } = useSideBarPath();
  return (
    <SidebarContainer>
      <Logo />
      <SidebarMenuContainer>
        <HomeLink current={path === locale} title={t('home.title')} />
        <SidebarAccordion
          title={t('airports.title')}
          current={isCurrentPage('airports')}
        >
          <AccordionMenu
            href={`${locale}/airports`}
            text={t('airports.categories.airportsList')}
            current={path === `${locale}/airports`}
          />
          <AccordionMenu
            href={`${locale}/airports/schedule`}
            text={t('airports.categories.airportsSchedule')}
            current={path === `${locale}/airports/schedule`}
          />
        </SidebarAccordion>
        <SidebarAccordion
          title={t('airlines.title')}
          current={isCurrentPage('airlines')}
        >
          <AccordionMenu
            href={`${locale}/airlines`}
            text={t('airlines.categories.airlinesList')}
            current={path === `${locale}/airlines`}
          />
          <AccordionMenu
            href={`${locale}/airlines/schedule`}
            text={t('airlines.categories.arilinesSchedule')}
            current={path === `${locale}/airlines/schedule`}
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
  },
  bottomMenu: {
    width: '100%',
    backgroundColor: 'yellow',
    marginTop: 'auto',
  },
});

export default Sidebar;
