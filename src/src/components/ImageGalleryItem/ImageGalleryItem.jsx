import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  state = {
    url: '',
  };

  useModal = ({ largeImageURL }) => {
    const { openModal } = this.props;
    this.setState({
      url: largeImageURL,
    });
    openModal(largeImageURL);
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <li className={css.gallaryItem}>
        <img
          className={css.gallaryLargeImage}
          src={webformatURL}
          alt={tags}
          onClick={() => this.useModal({ largeImageURL })}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  openModal: PropTypes.func,
  id: PropTypes.number,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;
