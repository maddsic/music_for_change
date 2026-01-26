export interface ModalProps {
  open: boolean;
  onClose: () => void;
  success?: boolean;
}

export interface ModalWrapperProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
