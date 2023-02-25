import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ gallery }) {
  return (
    <>
      <Gallery>
        {gallery &&
          gallery.map(item => {
            return <ImageGalleryItem key={item.id} item={item} />;
          })}
      </Gallery>
    </>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
