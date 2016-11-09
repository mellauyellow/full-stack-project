import React from 'react';
import { merge } from 'lodash';
import Region from './region';
import SearchResultsMap from './search_results_map';

class Search extends React.Component {
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

  componentDidMount() {
    let stateKeys = Object.keys(this.state);
    let stateArray = stateKeys.map(key => (`${key}=${this.state[key]}`));
    let stateString = stateArray.join("&");
    this.props.fetchRegion(this.props.params.id, stateString);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   let stateKeys = Object.keys(this.state);
  //   let stateArray = stateKeys.map(key => (`${key}=${this.state[key]}`));
  //   let stateString = stateArray.join("&");
  //   console.log(stateString);
  //   this.props.fetchRegion(this.props.params.id, stateString);
  // }

  handleChange(field) {
    return (e) => {
      let callback = () => {
        let stateKeys = Object.keys(this.state);
        let stateArray = stateKeys.map(key => (`${key}=${this.state[key]}`));
        let stateString = stateArray.join("&");
        this.props.fetchRegion(this.props.params.id, stateString);
      };

      let filter = e.target.value;
      // let path = `/search-results/${this.props.region.id}`;
      // let query = {[field]: filter};
      // this.props.router.push({pathname: path, query: query});

      if (field === "cost_of_living") {
        this.setState({[field]: parseInt(filter)}, callback);
      } else {
        this.setState({[field]: filter}, callback);
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
        <h3>Search results for {this.props.region.name}, {this.props.region.state}:</h3>

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

        <div className="region-results-content">
          <Region fetchRegion={this.props.fetchRegion} params={this.props.params} region={this.props.region}/>
          <SearchResultsMap region={this.props.region} router={this.props.router}/>
        </div>
      </div>
    );
  }
}

export default Search;
