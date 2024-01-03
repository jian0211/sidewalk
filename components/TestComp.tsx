'use client';

import { mainTest } from '@/store/mainTest';
import { useRecoilValue } from 'recoil';
export const TestComp = () => {
  const dd = useRecoilValue(mainTest);
  return <div>{dd}deddddd</div>;
};
