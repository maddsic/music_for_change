import { createContext, use, useState } from 'react';

// Define the type for the modal state
type ModalType = 'contact' | 'project' | "album" | null;

// Define the context type
type ModalContextType = {
  modal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};

// Create the context
export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalType>(null);
  const [formSent, setFormSent] = useState(false)

  //   Functions to open and close the modal
  const openModal = (type: ModalType) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    // Provide the modal state and functions to children components
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
