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
        <Dashboard.Box theme="rectangle" title="現在の為替">
          <h3>円</h3>
          <div>
            12.123
            <span>+1.30</span>
          </div>
          <div>
            <span>[Icon]実時間データ・15:56:59</span>
          </div>
        </Dashboard.Box>
        <Dashboard.Box theme="rectangle" title="oneTiotle">
          <h3>two</h3>
        </Dashboard.Box>
        <Dashboard.Box theme="rectangle" title="oneTiotle">
          <h3>three</h3>
        </Dashboard.Box>
        <Dashboard.Box theme="rectangle" title="oneTiotle">
          <h3>four</h3>
        </Dashboard.Box>
        <Dashboard.Box theme="square" title="oneTiotle" />
        <Dashboard.Box theme="graph" title="oneTiotle">
          <MyResponsiveLine />
        </Dashboard.Box>
      </Dashboard.Article>
    </Dashboard.Container>
  );
};
export default HomePage;
