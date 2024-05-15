import { atom, useRecoilState } from 'recoil';

const sliding = atom<boolean>({
  key: 'slidingAtom',
  default: false,
});

export const useSliding = () => {
  const [isSliding, setIsSliding] = useRecoilState(sliding);
  return { isSliding, setIsSliding };
};
