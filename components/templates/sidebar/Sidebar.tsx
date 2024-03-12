'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import {
  Logo,
  SidebarAccordion,
  SidebarMenuContainer,
  SidebarContainer,
  SidebarBottomContainer,
  SidebarFooter,
} from '../../organisms/sidebar/SidebarMenu';
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
    <SidebarContainer>
      <Logo />
      <SidebarMenuContainer>
        <BasicLink title={t('home.title')} href={`/${locale}`} borderHover />
        <SidebarAccordion
          title={t('airports.title')}
          isCurrent={isCurrentPage('airports')}
        >
          <BasicLink
            title={t('airports.categories.airportsList')}
            href={`/${locale}/airports/jp`}
            indent
          />
          <BasicLink
            title={t('airports.categories.airportsSchedule')}
            href={`/${locale}/airports/schedule`}
            indent
          />
        </SidebarAccordion>
        <SidebarAccordion
          title={t('airlines.title')}
          isCurrent={isCurrentPage('airlines')}
        >
          <BasicLink
            href={`/${locale}/airlines`}
            title={t('airlines.categories.airlinesList')}
            indent
          />
          <BasicLink
            href={`/${locale}/airlines/schedule`}
            title={t('airlines.categories.airlinesSchedule')}
            indent
          />
        </SidebarAccordion>
        <BasicLink
          title={t('fligths.title')}
          href={`/${locale}/fligths`}
          borderHover
        />
      </SidebarMenuContainer>
      <SidebarBottomContainer>
        <BasicLink
          href={`/${locale}/profile`}
          title={t('profile')}
          borderHover
        />
        <BasicLink
          href={`/${locale}/profile`}
          title={t(`authStatus.${'login'}`)} // auth
          borderHover
        />
        <SidebarFooter>
          <p>@2024</p>
        </SidebarFooter>
      </SidebarBottomContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
