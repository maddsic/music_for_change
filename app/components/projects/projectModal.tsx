import type { ModalProps } from '~/interface/modal';
import { ModalWrapper } from '../modals/modalWrapper';
import KickItProject from './kickItProject';

export default function ProjectModal({ open, onClose }: ModalProps) {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <KickItProject />
    </ModalWrapper>
  );
}
