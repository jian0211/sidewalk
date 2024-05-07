import React, { ReactNode, useState } from 'react';

type SlidingPanelControll = {
  isSlidingShow: boolean;
  setSlidingIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};
type SlidingPanelControllContextProviderProps = {
  children: ReactNode;
};

const SlidingPanelControllContext = React.createContext<
  SlidingPanelControll | undefined
>(undefined);

export const SlidingPanelContextProvider = ({
  children,
}: SlidingPanelControllContextProviderProps) => {
  const [isSlidingShow, setSlidingIsShow] =
    useState<SlidingPanelControll['isSlidingShow']>(false);

  return (
    <SlidingPanelControllContext.Provider
      value={{ isSlidingShow, setSlidingIsShow }}
    >
      {children}
    </SlidingPanelControllContext.Provider>
  );
};

export const useSliding = () => {
  const context = React.useContext(SlidingPanelControllContext);
  if (!context) {
    throw Error('useModalOpen should be used within DropdownControllContext');
  }
  return context;
};
