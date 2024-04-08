import { Metadata } from 'next';
import { MyResponsiveLine } from '@/components/templates/dashboard/graphTest';
import { Dashboard } from '@/components/templates/dashboard/dashboard';

export const metadata: Metadata = {
  title: 'Home-page | Sidewalk',
};

const HomePage = () => {
  return (
    <Dashboard.Container>
      <Dashboard.ArticleBox theme="rectangle" />
      <Dashboard.ArticleBox theme="square" />
      <Dashboard.ArticleBox theme="graph">
        <MyResponsiveLine />
      </Dashboard.ArticleBox>
    </Dashboard.Container>
  );
};
export default HomePage;
