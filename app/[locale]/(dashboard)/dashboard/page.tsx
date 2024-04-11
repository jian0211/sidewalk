import { Metadata } from 'next';
import { DashboardPage } from '@/components/templates/dashboard/dashboard';
import { Locales } from '@/types/locale';

export type PageProps = { params: { locale: Locales } };
export const metadata: Metadata = {
  title: 'Home-page | Sidewalk',
};

const Page = async (props: PageProps) => {
  return <DashboardPage {...props} />;
};
export default Page;
