import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export function Modal({ largeImg, onBackdropClick, tag }) {
  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalBox>
        <img src={largeImg} alt={tag} loading="lazy" />
      </ModalBox>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onBackdropClick: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
