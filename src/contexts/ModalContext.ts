import React, { Dispatch, SetStateAction } from 'react';

export interface IModalContext {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const initialContextData: IModalContext = {
  setOpen: () => {}
}
export const ModalContext = React.createContext<IModalContext>(initialContextData);
