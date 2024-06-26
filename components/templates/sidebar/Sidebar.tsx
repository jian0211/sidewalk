'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import {
  ContainerProps,
  SidebarMenu,
} from '../../organisms/sidebar/SidebarMenu';
import { useCurrentPath } from '@/hooks/useCurrentPath';
import { Locales } from '@/types/locale';

type SidebarProps = { locale: Locales } & ContainerProps;

const Sidebar = (props: SidebarProps) => {
  const { locale, ...rest } = props;
  const t = useTranslatedWord('sidebar');

  const paths = useCurrentPath();
  return (
    <SidebarMenu.Container {...rest}>
      <SidebarMenu.Logo />
      <SidebarMenu.MenuContainer>
        <SidebarMenu.TabMenu
          iconname="IconDashborad"
          title={t('home.title')}
          linkProps={{ href: `/${locale}/dashboard` }}
          isCurrent={paths.isDashboardPath}
        />
        <SidebarMenu.TabMenu
          iconname="IconAirportList"
          title={t('airports.categories.airportsList')}
          linkProps={{ href: `/${locale}/airports/jp` }}
          isCurrent={paths.isAirportPath}
        />
        <SidebarMenu.TabMenu
          iconname="IconPlaneList"
          title={t('airlines.categories.airlinesList')}
          linkProps={{ href: `/${locale}/airlines` }}
          isCurrent={paths.isAirlinePath}
        />
        <SidebarMenu.TabMenu
          iconname="IconFlight"
          title={t('flights.title')}
          linkProps={{ href: `/${locale}/flights` }}
          isCurrent={paths.isFligths}
        />
      </SidebarMenu.MenuContainer>
      {/* <SidebarMenu.BottomContainer>
        <SidebarMenu.TabMenu
          iconname="IconProfile"
          title={t('profile')}
          linkProps={{
            href: `/${locale}/profile`,
          }}
          isCurrent={paths.isProfile}
        />
        <SidebarMenu.TabMenu
          iconname="IconLogin"
          title={t('authStatus.login')}
          linkProps={{
            href: `/${locale}/login`,
          }}
          isCurrent={paths.isLogin}
        />
      </SidebarMenu.BottomContainer> */}
      <SidebarMenu.Footer>
        <p>@2024</p>
      </SidebarMenu.Footer>
    </SidebarMenu.Container>
  );
};

export default Sidebar;
