import { Component } from 'react';
import Style from './Modale.module.css';
import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
class Modal extends Component {
   state = {
    loaded: false 
  };

  handleImageLoad = () => {
    this.setState({ loaded: true }); 
  };

  closeModal = () => {
    const { openModal } = this.props;
    openModal();
  };
  
 render() {
    const { photoModal } = this.props;
    const { loaded } = this.state; 

    return (
      <div className={Style.overlay} onClick={this.closeModal}>
        <div className={Style.modal}>
          {!loaded && (
            <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="60"
              visible={true}
              className={Style.RotatingLines}
            />
          )}
          <img
            className={Style.modaleImage}
            src={photoModal}
            alt=""
            onLoad={this.handleImageLoad} 
            style={{ opacity: loaded ? '1' : '0' }} 
          />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  openModal: PropTypes.func,
  photoModal: PropTypes.string
}
export default Modal;
