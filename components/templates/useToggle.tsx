import { atom, useRecoilState } from 'recoil';

const onToggleSidebarMenu = atom({
  key: 'onToggleSidebarMenu',
  default: false,
});

export const useToggle = () => {
  const [onToggle, setOnToggle] = useRecoilState(onToggleSidebarMenu);
  return {
    states: {
      onToggle,
    },
    actions: {
      onClickToggle: () => setOnToggle((prev) => prev!),
      toFalse: () => setOnToggle(false),
    },
  };
};
