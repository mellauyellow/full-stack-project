import React from 'react';
import { merge } from 'lodash';

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
      user_id: null,
      neighborhood_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({user_id: newProps.currentUser.id, neighborhood_id: newProps.neighborhood.id});
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
  }

  handleChange(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h5>Your review:</h5>
            <input type="textarea" value={this.state.body} onChange={this.handleChange("body")} placeholder="Your review helps others learn about great neighborhoods in the region."></input>
          </label>

          <h5>Survey questions (optional): </h5>

          <fieldset className="good_for_families">
            <h5>Good for families?</h5>
            <label>
              <h6>yes</h6>
              <input type="radio" value="true" onClick={this.handleChange("good_for_families")}></input>
            </label>
            <label>
              <h6>no</h6>
              <input type="radio" value="false" onClick={this.handleChange("good_for_families")}></input>
            </label>
            <label>
              <h6>unsure</h6>
              <input type="radio" value="null" onClick={this.handleChange("good_for_families")}></input>
            </label>
          </fieldset>

          <fieldset className="good_for_singles">
            <h5>Good for singles?</h5>
            <label>
              <h6>yes</h6>
              <input type="radio" value="true" onClick={this.handleChange("good_for_singles")}></input>
            </label>
            <label>
              <h6>no</h6>
              <input type="radio" value="false" onClick={this.handleChange("good_for_singles")}></input>
            </label>
            <label>
              <h6>unsure</h6>
              <input type="radio" value="null" onClick={this.handleChange("good_for_singles")}></input>
            </label>
          </fieldset>

          <fieldset className="good_for_bikes">
            <h5>Bike friendly?</h5>
            <label>
              <h6>yes</h6>
              <input type="radio" value="true" onClick={this.handleChange("good_for_bikes")}></input>
            </label>
            <label>
              <h6>no</h6>
              <input type="radio" value="false" onClick={this.handleChange("good_for_bikes")}></input>
            </label>
            <label>
              <h6>unsure</h6>
              <input type="radio" value="null" onClick={this.handleChange("good_for_bikes")}></input>
            </label>
          </fieldset>

          <fieldset className="good_for_pets">
            <h5>Pet friendly?</h5>
            <label>
              <h6>yes</h6>
              <input type="radio" value="true" onClick={this.handleChange("good_for_pets")}></input>
            </label>
            <label>
              <h6>no</h6>
              <input type="radio" value="false" onClick={this.handleChange("good_for_pets")}></input>
            </label>
            <label>
              <h6>unsure</h6>
              <input type="radio" value="null" onClick={this.handleChange("good_for_pets")}></input>
            </label>
          </fieldset>

          <fieldset className="street_parking">
            <h5>Easy street parking?</h5>
            <label>
              <h6>yes</h6>
              <input type="radio" value="true" onClick={this.handleChange("street_parking")}></input>
            </label>
            <label>
              <h6>no</h6>
              <input type="radio" value="false" onClick={this.handleChange("street_parking")}></input>
            </label>
            <label>
              <h6>unsure</h6>
              <input type="radio" value="null" onClick={this.handleChange("street_parking")}></input>
            </label>
          </fieldset>

          <input type="submit" value="Submit Review"></input>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
