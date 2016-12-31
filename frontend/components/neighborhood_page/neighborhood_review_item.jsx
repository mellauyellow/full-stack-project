import React from 'react';
import Modal from 'react-modal';
import ReviewForm from './review_form/review_form';
import ModalStyle from './review_modal_style';

const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

class NeighborhoodReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.reviewImages = this.reviewImages.bind(this);
    this.reviewEditText = this.reviewEditText.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.generateCropURL = this.generateCropURL.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.modalOpen && Object.keys(nextProps.errors).length === 0) {
      this.setState({modalOpen: false});
    }
  }

  handleDelete(e) {
    this.props.deleteReview(this.props.review.id, this.props.neighborhood.id);
    this.props.fetchImages(this.props.neighborhood.id);
  }

  handleEdit(e) {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
    this.props.clearReviewErrors();
  }

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  }

  reviewImages() {
    if (this.props.images.length > 0) {
      let reviewImages = this.props.images.map((image, idx) => {
        let style = {
          backgroundImage: 'url(' + this.generateCropURL(image.url) + ')'
        };
        return (
          <div className="review-image" style={style} key={idx}></div>
        );
      });
      return reviewImages;
    }
  }

  reviewEditText() {
    if (this.props.review.user.id === this.props.currentUser.id) {
      return (
        <div className="review-edit-section">
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  generateCropURL(url) {
    let cropString = 'c_thumb,g_center,h_150,w_150/';
    let sliceIdx = url.indexOf('d/') + 2;
    return url.slice(0, sliceIdx) + cropString + url.slice(sliceIdx);
  }

  render() {
    let dateObject = new Date(this.props.review.created_at);

    return (
      <li>
        <div className="reviewer-content">
          <img src={this.props.review.user.profile_pic_url}></img>
          <div>
            <h5>{this.props.review.user.first_name} {this.props.review.user.last_name.slice(0, 1)}.</h5>
            <h6>Zip Code: {this.props.review.user.zip_code}</h6>
          </div>
        </div>
        <div className="review-body">
          <h5>{months[dateObject.getMonth()] + " " + dateObject.getFullYear()}</h5>
          <h5>{this.props.review.body}</h5>
          <div className="review-images">
            {this.reviewImages()}
          </div>
          {this.reviewEditText()}
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>
          <a onClick={this.onModalClose} className="close">x</a>
          <ReviewForm
            errors={this.props.errors}
            currentUser={this.props.currentUser}
            neighborhood={this.props.neighborhood}
            updateReview={this.props.updateReview}
            closeModal={this.onModalClose}
            uploadImage={this.props.uploadImage}
            currentReview={this.props.review}/>
        </Modal>
      </li>
    );
  }
}

export default NeighborhoodReviewItem;
