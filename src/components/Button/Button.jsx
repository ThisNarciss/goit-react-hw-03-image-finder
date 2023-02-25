import { FaBeer } from 'react-icons/fa';
import { LoadMore } from './Button.styled';

export function Button({ onBtnClick }) {
  return (
    <LoadMore type="button" onClick={() => onBtnClick()}>
      Load more
    </LoadMore>
  );
}
