import React from 'react';
import { merge } from 'lodash';
import ReviewFormItem from './review_form_item';
import Dropzone from 'react-dropzone';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {
        body: "",
        good_for_pets: null,
        good_for_bikes: null,
        good_for_singles: null,
        good_for_families: null,
        street_parking: null,
        user_id: this.props.currentUser.id,
        neighborhood_id: this.props.neighborhood.id
      },
      photos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.upload = this.upload.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    if (this.props.currentReview) {
      let newReviewState = merge({}, this.state.review);
      newReviewState.body = this.props.currentReview.body;
      this.setState({review: newReviewState});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentReview) {
      let reviewId = this.props.currentReview.id;
      let neighborhoodId = this.props.currentReview.neighborhood_id;
      this.props.updateReview(reviewId, neighborhoodId, this.state.review);
    } else {
      let reviewState = merge({}, this.state.review, {images: this.state.photos});
      this.props.postReview(reviewState, this.state.review.neighborhood_id);
    }
  }

  handleChange(field) {
    return (e) => {
      const newReviewState = merge({}, this.state.review);
      newReviewState[field] = e.target.value;
      this.setState({review: newReviewState});
    };
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if (!error) {
        let imageObjects = images.map(photo => {
          return {
            url: photo.url,
            user_id: this.state.review.user_id,
            neighborhood_id: this.state.review.neighborhood_id
          };
        });
        let newPhotos = this.state.photos.concat(imageObjects);
        this.setState({photos: newPhotos});
      }
    });
  }

  renderErrors() {
    if (this.props.errors) {
      let errorFields = Object.keys(this.props.errors);
      let errors = errorFields.map((field, idx) => {
        return (<li key={idx}>Error: review text {this.props.errors[field]}</li>);
      });
      return errors;
    } else {
      return <li></li>;
    }
  }

  render() {
    let uploadedImageText;
    if (this.state.photos.length > 1) {
      uploadedImageText = <h6>Uploading {this.state.photos.length} photos...</h6>;
    } else if (this.state.photos.length === 1) {
      uploadedImageText = <h6>Uploading {this.state.photos.length} photo...</h6>;
    } else {
      uploadedImageText = <h6></h6>;
    }
    console.log(this.state.body);

    return (
      <div className="review-form">
        <h3>Write a review for the {this.props.neighborhood.name} neighborhood</h3>
        <ul className="errors">
          {this.renderErrors()}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h5 className="review-form-field-header">Your review:</h5>
            <textarea wrap="soft" value={this.state.body} onChange={this.handleChange("body")} placeholder="Help others learn about the neighborhood."></textarea>
          </label>

          <div className="review-questions">
            <h5 className="review-form-field-header">Survey questions (optional): </h5>

            <fieldset className="good_for_families">
              <h5>Good for families?</h5>
              <div className="review-form-item">
                <label>
                  <h6>yes</h6>
                  <input type="radio" value="true" name="good_for_families" onClick={this.handleChange("good_for_families")}></input>
                </label>
                <label>
                  <h6>no</h6>
                  <input type="radio" value="false" name="good_for_families" onClick={this.handleChange("good_for_families")}></input>
                </label>
                <label>
                  <h6>unsure</h6>
                  <input type="radio" value="null" name="good_for_families" onClick={this.handleChange("good_for_families")}></input>
                </label>
              </div>
            </fieldset>

            <fieldset className="good_for_singles">
              <h5>Good for singles?</h5>
              <div className="review-form-item">
                <label>
                  <h6>yes</h6>
                  <input type="radio" value="true" name="good_for_singles" onClick={this.handleChange("good_for_singles")}></input>
                </label>
                <label>
                  <h6>no</h6>
                  <input type="radio" value="false" name="good_for_singles" onClick={this.handleChange("good_for_singles")}></input>
                </label>
                <label>
                  <h6>unsure</h6>
                  <input type="radio" value="null" name="good_for_singles" onClick={this.handleChange("good_for_singles")}></input>
                </label>
              </div>
            </fieldset>

            <fieldset className="good_for_bikes">
              <h5>Bike friendly?</h5>
              <div className="review-form-item">
                <label>
                  <h6>yes</h6>
                  <input type="radio" value="true" name="good_for_bikes" onClick={this.handleChange("good_for_bikes")}></input>
                </label>
                <label>
                  <h6>no</h6>
                  <input type="radio" value="false" name="good_for_bikes" onClick={this.handleChange("good_for_bikes")}></input>
                </label>
                <label>
                  <h6>unsure</h6>
                  <input type="radio" value="null" name="good_for_bikes" onClick={this.handleChange("good_for_bikes")}></input>
                </label>
              </div>
            </fieldset>

            <fieldset className="good_for_pets">
              <h5>Pet friendly?</h5>
              <div className="review-form-item">
                <label>
                  <h6>yes</h6>
                  <input type="radio" value="true" name="good_for_pets" onClick={this.handleChange("good_for_pets")}></input>
                </label>
                <label>
                  <h6>no</h6>
                  <input type="radio" value="false" name="good_for_pets" onClick={this.handleChange("good_for_pets")}></input>
                </label>
                <label>
                  <h6>unsure</h6>
                  <input type="radio" value="null" name="good_for_pets" onClick={this.handleChange("good_for_pets")}></input>
                </label>
              </div>
            </fieldset>

            <fieldset className="street_parking">
              <h5>Easy street parking?</h5>
              <div className="review-form-item">
                <label>
                  <h6>yes</h6>
                  <input type="radio" value="true" name="street_parking" onClick={this.handleChange("street_parking")}></input>
                </label>
                <label>
                  <h6>no</h6>
                  <input type="radio" value="false" name="street_parking" onClick={this.handleChange("street_parking")}></input>
                </label>
                <label>
                  <h6>unsure</h6>
                  <input type="radio" value="null" name="street_parking" onClick={this.handleChange("street_parking")}></input>
                </label>
              </div>
            </fieldset>

            <div className="review-form-buttons">
              <div className="review-form-image-section">
                <button onClick={this.upload}>
                  Upload image
                </button>
                {uploadedImageText}
              </div>
              <input type="submit" value="Submit Review"></input>
            </div>


          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
