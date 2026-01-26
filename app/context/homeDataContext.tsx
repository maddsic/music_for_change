import { createContext } from 'react';

export const Context = createContext<any>(null);

export const HomeDataProvider = ({ data, children }: any) => (
  <Context.Provider value={data}>{children}</Context.Provider>
);
