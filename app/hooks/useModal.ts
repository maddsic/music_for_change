import { useContext } from 'react';
import { ModalContext } from '~/context/modalContext';

export function useModal() {
  const context = useContext(ModalContext);

  //   Ensure the hook is used within a ModalProvider
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  //   return the modal context
  return context;
}
