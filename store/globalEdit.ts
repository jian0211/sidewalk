import { atom } from 'recoil';

type GlobalEditAtom = {
  isEditting: boolean;
};

export const globalEditAtom = atom<GlobalEditAtom>({
  key: 'globalEditAtom',
  default: {
    isEditting: false,
  },
});
