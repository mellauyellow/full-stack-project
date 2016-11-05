import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import NeighborhoodImagesSlideshow from './neighborhood_images_slideshow';
import ModalStyle from './images_modal_style';

class NeighborhoodImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);

  }

  handleClick() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  }

  render() {
    if (Object.keys(this.props.images).length > 0) {
      let imageKeys = Object.keys(this.props.images);

      let neighborhoodReps = imageKeys.filter(key => {
        return this.props.images[key].neighborhood_rep === true;
      });

      let randomNeighborhoodRep = neighborhoodReps[Math.floor(Math.random() * neighborhoodReps.length)];
      // debugger
      let style = {
        backgroundImage: 'url(' + this.props.images[randomNeighborhoodRep].url + ')'
      };

      return (
        <div>
          <a onClick={this.handleClick}>
            <div className="neighborhood-image" style={style}>
              <button>View Photos</button>
            </div>
          </a>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>
            <Link onClick={this.onModalClose} className="close">x</Link>
            <NeighborhoodImagesSlideshow images={this.props.images}/>
          </Modal>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default NeighborhoodImage;
