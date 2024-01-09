import { PathName } from '@/types/path';
import { usePathname } from 'next/navigation';

export const useSideBarPath = () => {
  const path = usePathname();
  const isCurrentPage = (_path: PathName) => path.includes(_path);

  return { path, isCurrentPage };
};
