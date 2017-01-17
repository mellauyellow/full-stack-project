import React from 'react';
import SearchDropdownItem from './search_dropdown_item';

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchRegions();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let defaultFilters = "walk_score=default&transit_score=default&cost_of_living=default&most_like=default";

    let regionId = e.target.value;
    let path = `/search-results/${regionId}`;
    this.props.router.push(path);
    this.props.fetchRegion(regionId, defaultFilters);
  }

  render() {
    let allRegions = this.props.regions.map((region, idx) => (
      <SearchDropdownItem region={region} key={idx}/>
    ));

    let divStyle = {
      position: "relative"
    };

    let classStyle = {};
    let selectStyle = {};

    if (this.props.location === "/") {
      classStyle = {
        position: "absolute",
        top: 400,
        backgroundColor: "white"
      };
      selectStyle = {
        fontSize: 18,
        color: "silver",
        borderRadius: 2,
        background: 'url(http://www.scottgood.com/jsg/blog.nsf/images/arrowdown.gif) no-repeat 90% 50%'
      };
    } else {
      selectStyle = {
        fontSize: 14
      };
      classStyle = {
        position: "absolute",
        top: -15,
        left: -50,
        backgroundColor: "white"
      };
    }

    return (
      <div className="regions-dropdown" style={divStyle}>
        <div className="dropdown" style={classStyle}>
          <select onChange={this.handleChange} style={selectStyle} value="default">
            <option value="default">Select a region</option>
            {allRegions}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchDropdown;
