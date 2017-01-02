import React from 'react';
import { merge } from 'lodash';
import Region from './region';
import SearchResultsMap from './search_results_map';
import SearchForm from './search_form';

class Search extends React.Component {
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
  }

  componentDidMount() {
    let stateKeys = Object.keys(this.state.filters);
    let stateArray = stateKeys.map(key => (`${key}=${this.state.filters[key]}`));
    let stateString = stateArray.join("&");
    this.props.fetchRegion(this.props.params.id, stateString);
  }

  render() {
    return (
      <div className="search-filters">
        <div className="search-header">
          <h3>Search results for {this.props.region.name}, {this.props.region.state}:</h3>
          <SearchForm fetchRegion={this.props.fetchRegion} params={this.props.params} fetchSearchRegion={this.props.fetchSearchRegion} search={this.props.search}/>
        </div>

        <div className="region-results-content">
          <Region fetchRegion={this.props.fetchRegion} params={this.props.params} region={this.props.region}/>
          <SearchResultsMap region={this.props.region} router={this.props.router} fetchRegion={this.props.fetchRegion}/>
        </div>
      </div>
    );
  }
}

export default Search;
