import { Overlay, ModalBox } from './Modal.styled';

export function Modal({ largeImg }) {
  return (
    <Overlay>
      <ModalBox>
        <img src={largeImg} alt="" />
      </ModalBox>
    </Overlay>
  );
}
