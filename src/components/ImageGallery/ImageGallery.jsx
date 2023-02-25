import { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
class ImageGallery extends Component {
  render() {
    const { item, openModal } = this.props;
    return (
      <ul className={Style.gallery}>
        {item.map(item => (
          <ImageGalleryItem
            key={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
            tags={item.tags}
            openModal={openModal}
          />
        ))}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
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
export default ImageGallery;
