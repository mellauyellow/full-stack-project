import React from 'react';

class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walk_score: "",
      transit_score: "",
      cost_of_living: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.determineFieldSelect = this.determineFieldSelect.bind(this);
  }

  handleChange(field) {
    return (e) => {
      let filter = e.target.value;
      let path = `/search-results/${this.props.region.id}`;
      let query = {[field]: filter};
      this.props.router.push({pathname: path, query: query});
    };
  }

  determineFieldSelect(field) {
    let queryKeys = Object.keys(this.props.query);
    if (queryKeys.includes(field)) {
      return this.props.query.field;
    } else {
      return "default";
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
        </form>
      </div>
    );
  }
}

export default SearchFilters;
