import type { ModalProps } from '~/interface/modal';
import { ModalWrapper } from '../modals/modalWrapper';
import AlbumDetails from './albumDetails';

export default function EventModal({ open, onClose }: ModalProps) {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <AlbumDetails />
    </ModalWrapper>
  );
}
