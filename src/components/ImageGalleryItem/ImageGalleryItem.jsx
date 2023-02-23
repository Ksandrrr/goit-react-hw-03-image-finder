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
    const { item } = this.props;

    const element = item.map(({ id, tags, webformatURL, largeImageURL }) => {
      return (
        <li className={css.gallaryItem} key={id}>
          <img
            className={css.gallaryLargeImage}
            src={webformatURL}
            alt={tags}
            onClick={() => this.useModal({ largeImageURL })}
          />
        </li>
      );
    });

    return element;
  }
}
ImageGalleryItem.propTypes = {
  openModal: PropTypes.func,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};

export default ImageGalleryItem;
