import { Overlay, ModalBox } from './Modal.styled';

export function Modal({ largeImg, onBackdropClick }) {
  return (
    <Overlay onClick={onBackdropClick}>
      <ModalBox>
        <img src={largeImg} alt="" loading="lazy" />
      </ModalBox>
    </Overlay>
  );
}
