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
  }

  onDrop(acceptedFiles, rejectedFiles) {
    let photos = this.state.photos.slice(0);
    let newPhotos = photos.concat(acceptedFiles);
    this.setState({photos: newPhotos});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newReviewState = merge({}, this.state.review);
    let stateKeys = Object.keys(newReviewState);
    stateKeys.forEach(key => {
      if (newReviewState[key] === "null") {
        delete newReviewState[key];
      }
    });

    this.props.postReview(newReviewState, newReviewState.neighborhood_id);
    this.props.closeModal();
  }

  handleChange(field) {
    return (e) => {
      const newReviewState = merge({}, this.state.review);
      newReviewState[field] = e.target.value;
      this.setState({review: newReviewState});
    };
  }

  render() {
    console.log(this.state);
    let photoPreview;
    if (this.state.photos.length > 0) {
      let allPhotos = this.state.photos.map((file, idx) => <img src={file.preview} key={idx} />);

      photoPreview =
        (<div>
          <h5>Uploading {this.state.photos.length} files...</h5>
          <div>{allPhotos}</div>
        </div>);
    } else {
      photoPreview = <div></div>;
    }

    return (
      <div className="review-form">
        <h3>Write a review for the {this.props.neighborhood.name} neighborhood</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h5>Your review:</h5>
            <input type="textarea" wrap="soft" value={this.state.body} onChange={this.handleChange("body")} placeholder="Help others learn about the neighborhood."></input>
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

            <div className="dropzone-container">
              <Dropzone onDrop={this.onDrop} className="dropzone">
                <div className="dropzone-text">Click to select files to upload, or drag the files here.</div>
              </Dropzone>
              {photoPreview}
            </div>

            <input type="submit" value="Submit Review"></input>

          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
