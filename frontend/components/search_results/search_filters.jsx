import React from 'react';
import { merge } from 'lodash';

class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walk_score: "default",
      transit_score: "default",
      cost_of_living: "default"
    };

    this.handleChange = this.handleChange.bind(this);
    this.determineFieldSelect = this.determineFieldSelect.bind(this);
  }

  // componentDidUpdate() {
  //   let newState = merge({}, this.state);
  //   let newStateKeys = Object.keys(newState);
  //   newStateKeys.forEach(key => {
  //     if (newState[key] === "default") {
  //       delete newState[key];
  //     }
  //   });
  //
  //   this.props.fetchRegion(this.props.region.id, newState);
  // }

  handleChange(field) {
    return (e) => {
      // let filter = e.target.value;
      // let path = `/search-results/${this.props.region.id}`;
      // let query = {[field]: filter};
      // this.props.router.push({pathname: path, query: query});

      if (field === "cost_of_living") {
        this.setState({[field]: parseInt(e.target.value)});
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  determineFieldSelect(field) {
    if (this.state[field] === "") {
      return "default";
    } else {
      return this.state[field];
    }
  }

  render() {
    return (
      <div className="search-filters">
        <form className="search-filters-form">
          <label>
            <h5>Walk score:</h5>
            <select value={this.determineFieldSelect("walk_score")} onChange={this.handleChange("walk_score")}>
              <option value="default"> </option>
              <option value="high">high</option>
              <option value="med">medium</option>
              <option value="low">low</option>
            </select>
          </label>

          <label>
            <h5>Transit score:</h5>
            <select value={this.determineFieldSelect("transit_score")} onChange={this.handleChange("transit_score")}>
              <option value="default"> </option>
              <option value="high">high</option>
              <option value="med">medium</option>
              <option value="low">low</option>
            </select>
          </label>

          <label>
            <h5>Cost of Living:</h5>
            <select value={this.determineFieldSelect("cost_of_living")} onChange={this.handleChange("cost_of_living")}>
              <option value="default"> </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchFilters;
