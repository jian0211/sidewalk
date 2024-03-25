import { PathName } from '@/types/path';
import { usePathname } from 'next/navigation';

export const useCurrentPath = () => {
  const path = usePathname();
  const isCurrentPage = (_path: PathName) => path.includes(_path);

  return {
    path,
    isAirportPath: isCurrentPage('airports'),
    isHomePath: path === '/ja' || path === '/ko',
    isAirlinePath: isCurrentPage('airlines'),
    isFligths: isCurrentPage('flights'),
    isLogin: isCurrentPage('login'),
    isSchedule: isCurrentPage('schedule'),
    isProfile: isCurrentPage('profile'),
    isCurrentPage,
  };
};
