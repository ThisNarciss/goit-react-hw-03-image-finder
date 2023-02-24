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
