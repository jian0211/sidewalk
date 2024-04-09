import { Metadata } from 'next';
import { MyResponsiveLine } from '@/components/templates/dashboard/graphTest';
import { Dashboard } from '@/components/templates/dashboard/dashboard';

export const metadata: Metadata = {
  title: 'Home-page | Sidewalk',
};

const HomePage = async () => {
  return (
    <Dashboard.Container>
      <Dashboard.Article>
        <Dashboard.Box theme="rectangle">
          <h3>one</h3>
        </Dashboard.Box>
        <Dashboard.Box theme="rectangle">
          <h3>two</h3>
        </Dashboard.Box>
        <Dashboard.Box theme="rectangle">
          <h3>three</h3>
        </Dashboard.Box>
        <Dashboard.Box theme="rectangle">
          <h3>four</h3>
        </Dashboard.Box>
        <Dashboard.Box theme="square" />
        <Dashboard.Box theme="graph">
          <MyResponsiveLine />
        </Dashboard.Box>
      </Dashboard.Article>
    </Dashboard.Container>
  );
};
export default HomePage;
