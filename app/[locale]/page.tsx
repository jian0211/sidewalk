import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Home-page | Sidewalk',
};

const HomePage = async () => {
  redirect('/dashboard');
};
export default HomePage;
