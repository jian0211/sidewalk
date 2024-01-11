'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import {
  Logo,
  SidebarAccordion,
  SidebarMenuContainer,
  SidebarContainer,
  SidebarBottomContainer,
} from '../../organisms/sidebar/SidebarMenu';
import { useSideBarPath } from './useCurrentPath';
import { BasicLink } from '@/components/organisms/Link/Link';

const Sidebar = () => {
  const t = useTranslatedWord('sidebar');
  // const { locale } = useCurrentLocale();
  const locale = '/ja'; // [TODO] change
  const { isCurrentPage } = useSideBarPath();
  return (
    <SidebarContainer>
      <Logo />
      <SidebarMenuContainer>
        <BasicLink title={t('home.title')} href={locale} borderHover />
        <SidebarAccordion
          title={t('airports.title')}
          isCurrent={isCurrentPage('airports')}
        >
          <BasicLink
            title={t('airports.categories.airportsList')}
            href={`${locale}/airports`}
            indent
          />
          <BasicLink
            title={t('airports.categories.airportsSchedule')}
            href={`${locale}/airports/schedule`}
            indent
          />
        </SidebarAccordion>
        <SidebarAccordion
          title={t('airlines.title')}
          isCurrent={isCurrentPage('airlines')}
        >
          <BasicLink
            href={`${locale}/airlines`}
            title={t('airlines.categories.airlinesList')}
            indent
          />
          <BasicLink
            href={`${locale}/airlines/schedule`}
            title={t('airlines.categories.arilinesSchedule')}
            indent
          />
        </SidebarAccordion>
      </SidebarMenuContainer>
      <SidebarBottomContainer>
        <BasicLink
          href={`${locale}/profile`}
          title="profile" //{t('home.title')}
          borderHover
        />
        <BasicLink
          href={`${locale}/profile`}
          title="login/out" //{t('home.title')}
          borderHover
        />
        <div>
          <p>email : myunggeun222@gmail.com</p>
          <p>Notion</p>
          <p>@2024</p>
        </div>
      </SidebarBottomContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
