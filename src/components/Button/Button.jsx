import { LoadMore } from './Button.styled';

export function Button({ onBtnClick }) {
  return (
    <LoadMore type="button" onClick={() => onBtnClick()}>
      Load more
    </LoadMore>
  );
}
