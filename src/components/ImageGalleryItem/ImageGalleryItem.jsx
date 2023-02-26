import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    showModal: false,
  };

  toggleModal = evt => {
    if (evt.currentTarget === evt.target) {
      this.setState(({ showModal }) => ({ showModal: !showModal }));
    }
  };

  render() {
    const { showModal } = this.state;
    const {
      item: { webformatURL, largeImageURL, tags },
    } = this.props;
    return (
      <GalleryItem>
        <GalleryItemImage
          src={webformatURL}
          alt={tags}
          loading="lazy"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal
            tag={tags}
            largeImg={largeImageURL}
            onBackdropClick={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
