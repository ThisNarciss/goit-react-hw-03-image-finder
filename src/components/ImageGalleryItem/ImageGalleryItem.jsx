import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    const {
      item: { webformatURL, largeImageURL },
    } = this.props;
    return (
      <GalleryItem>
        <GalleryItemImage
          src={webformatURL}
          alt=""
          loading="lazy"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal largeImg={largeImageURL} onBackdropClick={this.toggleModal} />
        )}
      </GalleryItem>
    );
  }
}
