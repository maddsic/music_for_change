import React, { useEffect, useState } from 'react';
import FormSuccess from './formSuccess';
import ContactForm from './contactForm';
import type { ModalProps } from '~/interface/modal';
import { ModalWrapper } from '../modals/modalWrapper';

export const ContactModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [formSent, setFormSent] = useState<boolean>(false)

  // Close modal and setForm state to false
  const handleClose = () => {
    setFormSent(false);
    onClose();
  }

  useEffect(() => {
    // Close modal upon form success
    if (formSent) {
      const timer = setTimeout(handleClose, 3000);
      return () => clearTimeout(timer)
    }
  }, [formSent])



  return (
    <ModalWrapper open={open} onClose={handleClose}>
      {formSent ? <FormSuccess onClose={handleClose} /> : <ContactForm onSuccess={() => setFormSent(true)} />}
    </ModalWrapper>
  );
};
