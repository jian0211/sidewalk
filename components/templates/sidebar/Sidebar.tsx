'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { SidebarMenu } from '../../organisms/sidebar/SidebarMenu';
import { useCurrentPath } from '@/hooks/useCurrentPath';
import { BasicLink } from '@/components/organisms/Link/Link';
import { useLocale } from '@/hooks/useLocale';

const Sidebar = () => {
  const t = useTranslatedWord('sidebar');
  const {
    states: { locale },
  } = useLocale();
  const { isCurrentPage } = useCurrentPath();
  return (
    <SidebarMenu.Container>
      <SidebarMenu.Logo />
      <SidebarMenu.MenuContainer>
        <SidebarMenu.TabMenu
          menutype="home"
          title={t('home.title')}
          linkProps={{ href: `/${locale}` }}
          isCurrent={isCurrentPage('home')}
        />
        <SidebarMenu.Accordion
          title={t('airports.title')}
          isCurrent={isCurrentPage('airports')}
          menutype="airports"
        >
          <SidebarMenu.TabMenu
            menutype="airportsList"
            title={t('airports.categories.airportsList')}
            linkProps={{ href: `/${locale}/airports/jp` }}
          />
          <SidebarMenu.TabMenu
            menutype="airportsList"
            title={t('airports.categories.airportsSchedule')}
            linkProps={{ href: `/${locale}/airports/schedule` }}
          />
        </SidebarMenu.Accordion>
        <SidebarMenu.Accordion
          title={t('airlines.title')}
          isCurrent={isCurrentPage('airlines')}
          menutype="airlines"
        >
          <SidebarMenu.TabMenu
            menutype="airlineList"
            title={t('airlines.categories.airlinesList')}
            linkProps={{ href: `/${locale}/airlines` }}
          />
          <SidebarMenu.TabMenu
            menutype="airlineList"
            title={t('airlines.categories.airlinesSchedule')}
            linkProps={{ href: `/${locale}/airlines/schedule` }}
          />
        </SidebarMenu.Accordion>
        <SidebarMenu.TabMenu
          menutype="flights"
          title={t('flights.title')}
          linkProps={{ href: `/${locale}/flights` }}
          isCurrent={isCurrentPage('flights')}
        />
      </SidebarMenu.MenuContainer>
      <SidebarMenu.BottomContainer>
        <SidebarMenu.TabMenu
          menutype="profile"
          title={t('profile')}
          linkProps={{
            href: `/${locale}/profile`,
          }}
        />
        <SidebarMenu.TabMenu
          menutype="login"
          title={t('authStatus.login')}
          linkProps={{
            href: `/${locale}/login`,
          }}
        />
        <SidebarMenu.Footer>
          <p>@2024</p>
        </SidebarMenu.Footer>
      </SidebarMenu.BottomContainer>
    </SidebarMenu.Container>
  );
};

export default Sidebar;
