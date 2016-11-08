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
    this.onDrop = this.onDrop.bind(this);
    this.upload = this.upload.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    let photos = this.state.photos.slice(0);
    // acceptedFiles.forEach(file => {})
    let newPhotos = photos.concat(acceptedFiles);
    this.setState({photos: newPhotos});
  }

  handleSubmit(e) {
    e.preventDefault();
    let reviewState = merge({}, this.state.review, {images: this.state.photos});
    this.props.postReview(reviewState, this.state.review.neighborhood_id);
    this.props.closeModal();
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

  render() {
    let uploadedImageText;
    if (this.state.photos.length > 0) {
      uploadedImageText = <h6>Uploading {this.state.photos.length} photos...</h6>;
    } else {
      uploadedImageText = <h6></h6>;
    }

    return (
      <div className="review-form">
        <h3>Write a review for the {this.props.neighborhood.name} neighborhood</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h5>Your review:</h5>
            <textarea wrap="soft" value={this.state.body} onChange={this.handleChange("body")} placeholder="Help others learn about the neighborhood."></textarea>
          </label>

          <div className="review-questions">
            <h5>Survey questions (optional): </h5>

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

            <button onClick={this.upload}>
              Upload image
            </button>

            {uploadedImageText}

            <input type="submit" value="Submit Review"></input>


          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;

// <div className="dropzone-container">
//   <Dropzone onDrop={this.onDrop} className="dropzone">
//     <div className="dropzone-text">Click to select files to upload, or drag the files here.</div>
//   </Dropzone>
//   {photoPreview}
// </div>

// let photoPreview;
// if (this.state.photos.length > 0) {
//   let allPhotos = this.state.photos.map((file, idx) => <img src={file.preview} key={idx} />);
//
//   photoPreview =
//     (<div>
//       <h5>Uploading {this.state.photos.length} files...</h5>
//       <div>{allPhotos}</div>
//     </div>);
// } else {
//   photoPreview = <div></div>;
// }
