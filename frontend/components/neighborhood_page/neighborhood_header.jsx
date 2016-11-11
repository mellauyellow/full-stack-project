import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ReviewForm from './review_form/review_form';
import SessionFormContainer from '../header/session/session_form_container';
import ModalStyle from './review_modal_style';

class NeighborhoodHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      reviewForm: true,
      loggedIn: null,
      photos: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.determineComponent = this.determineComponent.bind(this);
    this.handleNextAction = this.handleNextAction.bind(this);
    this.cloudinaryUpload = this.cloudinaryUpload.bind(this);
  }

  componentDidMount() {
    this.checkLogin();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loggedIn: Boolean(nextProps.currentUser.id)});
    if (this.state.modalOpen && Object.keys(nextProps.errors).length === 0) {
      this.setState({modalOpen: false});
    }
  }

  handleClick(bool) {
    return () => {
      if (this.state.loggedIn && !bool) {
        this.cloudinaryUpload();
      } else {
        this.setState({modalOpen: true, reviewForm: bool});
      }
    };
  }

  onModalClose() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
    this.props.clearReviewErrors();
  }

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  }

  checkLogin() {
    this.setState({loggedIn: Boolean(this.props.currentUser.id)});
  }

  handleNextAction() {
    if (this.state.loggedIn && !this.state.reviewForm) {
      this.cloudinaryUpload();
      this.setState({modalOpen: false});
    } else if (this.state.loggedIn) {
      this.setState({modalOpen: true});
    }
  }

  cloudinaryUpload() {
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if (!error) {
        let photos = this.state.photos.slice(0);
        let newPhotos = photos.concat(images);
        this.setState({photos: newPhotos});
      }
    });
  }

  componentDidUpdate() {
    if (this.state.photos.length > 0) {
      this.state.photos.forEach(photo => {
        let image = {
          url: photo.secure_url,
          user_id: this.props.currentUser.id,
          neighborhood_id: this.props.neighborhood.id
        };

        this.props.uploadImage(image, this.props.neighborhood.id);
        let newPhotoState = this.state.photos.slice(1);
        this.setState({photos: newPhotoState});
      });
    }
  }

  determineComponent() {
    let component;

    if (this.state.loggedIn) {
      if (this.state.reviewForm) {
        component = <ReviewForm
          errors={this.props.errors}
          currentUser={this.props.currentUser}
          neighborhood={this.props.neighborhood}
          postReview={this.props.postReview}
          closeModal={this.onModalClose}
          uploadImage={this.props.uploadImage}
          reviews={this.props.reviews}/>;
      } else {
        component = <div></div>;
      }
    } else {
      component = <SessionFormContainer closeModal={this.onModalClose} nextAction={this.handleNextAction}/>;
    }

    return component;
  }

  render() {
    let component = this.determineComponent();
    let searchResults = `/search-results/${this.props.neighborhood.region_id}`;
    return (
      <div className="neighborhood-header">
        <div className="neighborhood-header-topline">
          <h2>{this.props.neighborhood.name}</h2>
          <div className="neighborhood-header-buttons">
            <button onClick={this.handleClick(true)}>Write a Review</button>
            <button onClick={this.handleClick(false)}>Add a Photo</button>
          </div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>
            <Link onClick={this.onModalClose} className="close">x</Link>
            {component}
          </Modal>
        </div>
        <Link to={searchResults}>
          <h5>Back to search results</h5>
        </Link>
      </div>
    );
  }
}

export default NeighborhoodHeader;
