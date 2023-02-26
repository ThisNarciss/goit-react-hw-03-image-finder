import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ gallery, children }) {
  return (
    <>
      <Gallery>
        {gallery &&
          gallery.map(item => {
            return <ImageGalleryItem key={item.id} item={item} />;
          })}
      </Gallery>
      {children}
    </>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
