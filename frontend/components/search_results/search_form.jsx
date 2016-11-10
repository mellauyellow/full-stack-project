import React from 'react';
import { merge } from 'lodash';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        walk_score: "default",
        transit_score: "default",
        cost_of_living: "default",
        most_like: "default"
      },
      searchForm: "hidden"
    };

    this.toggleSearchForm = this.toggleSearchForm.bind(this);
    this.determineFieldSelect = this.determineFieldSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.neighborhoodSearchOptions = this.neighborhoodSearchOptions.bind(this);
  }

  toggleSearchForm(e) {
    e.preventDefault();
    if (this.state.searchForm === "hidden") {
      this.setState({searchForm: ""});
    } else {
      this.setState({searchForm: "hidden"});
    }
  }

  determineFieldSelect(field) {
    if (this.state.filters[field] === "") {
      return "default";
    } else {
      return this.state.filters[field];
    }
  }

  handleChange(field) {
    return (e) => {
      let callback = () => {
        let stateKeys = Object.keys(this.state.filters);
        let stateArray = stateKeys.map(key => (`${key}=${this.state.filters[key]}`));
        let stateString = stateArray.join("&");
        // let path = `/search-results/${this.props.region.id}`;
        // let query = {[field]: filter};
        // this.props.router.push({pathname: path, query: query});
        this.props.fetchRegion(this.props.params.id, stateString);
      };

      let filter = e.target.value;
      let newState = merge({}, this.state.filters, {[field]: filter});
      this.setState({filters: newState}, callback);
    };
  }

  handleRegionChange(e) {
    e.preventDefault();
    let regionId = e.target.value;
    let defaultQueryString = "walk_score=default&transit_score=default&cost_of_living=default&most_like=default";
    this.props.fetchSearchRegion(regionId, defaultQueryString);
  }

  neighborhoodSearchOptions() {
    if (this.props.search.neighborhoods) {
      let neighborhoods = this.props.search.neighborhoods.map((neighborhood, idx) => (
        <option key={idx} value={neighborhood.id}>{neighborhood.name}</option>
      ));

      return neighborhoods;
    } else {
      return <option>Select a region</option>;
    }
  }

  render() {
    return (
      <div className="search-filters-button-form">
        <button onClick={this.toggleSearchForm}>Search Filters</button>

        <div className={this.state.searchForm}>
          <form className="search-filters-form">
            <label>
              <h5>Walk score:</h5>
              <select value={this.determineFieldSelect("walk_score")} onChange={this.handleChange("walk_score")}>
                <option value="default">all</option>
                <option value="high">high</option>
                <option value="med">medium</option>
                <option value="low">low</option>
              </select>
            </label>

            <label>
              <h5>Transit score:</h5>
              <select value={this.determineFieldSelect("transit_score")} onChange={this.handleChange("transit_score")}>
                <option value="default">all</option>
                <option value="high">high</option>
                <option value="med">medium</option>
                <option value="low">low</option>
              </select>
            </label>

            <label>
              <h5>Cost of living:</h5>
              <select value={this.determineFieldSelect("cost_of_living")} onChange={this.handleChange("cost_of_living")}>
                <option value="default">all</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </label>

            <label>
              <h5>Most like:</h5>
              <select onChange={this.handleRegionChange}>
                <option value="default">Region</option>
                <option value="1">San Francisco</option>
                <option value="2">New York</option>
                <option value="3">Los Angeles</option>
                <option value="4">Chicago</option>
              </select>

              <select onChange={this.handleChange("most_like")}>
                <option>Neighborhood</option>
                {this.neighborhoodSearchOptions()}
              </select>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
