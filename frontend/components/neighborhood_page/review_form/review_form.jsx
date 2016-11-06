import React from 'react';
import { merge } from 'lodash';
import ReviewFormItem from './review_form_item';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      good_for_pets: null,
      good_for_bikes: null,
      good_for_singles: null,
      good_for_families: null,
      street_parking: null,
      user_id: this.props.currentUser.id,
      neighborhood_id: this.props.neighborhood.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = merge({}, this.state);
    let stateKeys = Object.keys(newState);
    stateKeys.forEach(key => {
      if (newState[key] === "null") {
        delete newState[key];
      }
    });

    this.props.postReview(newState, newState.neighborhood_id);
    this.props.closeModal();
  }

  handleChange(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  render() {
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

            <input type="submit" value="Submit Review"></input>

          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
