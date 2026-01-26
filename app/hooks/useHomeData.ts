import { useContext } from 'react';
import { Context } from '~/context/homeDataContext';

export const useContextData = () => {
  const contextData = useContext(Context);
  if (!contextData) {
    throw new Error('useContextData must be used within a HomeDataContextProvider');
  }
  return contextData;
};
