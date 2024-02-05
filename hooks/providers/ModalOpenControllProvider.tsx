import React, { ReactNode, useState } from 'react';

type ModalOpenControll = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};
type DropdownControllContextProviderProps = {
  children: ReactNode;
};

const DropdownControllContext = React.createContext<
  ModalOpenControll | undefined
>(undefined);

export const DropdownControllContextProvider = ({
  children,
}: DropdownControllContextProviderProps) => {
  const [isShow, setIsShow] = useState<ModalOpenControll['isShow']>(false);

  return (
    <DropdownControllContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </DropdownControllContext.Provider>
  );
};

export const useDropdown = () => {
  const context = React.useContext(DropdownControllContext);
  if (!context) {
    throw Error('useModalOpen should be used within DropdownControllContext');
  }
  return context;
};
