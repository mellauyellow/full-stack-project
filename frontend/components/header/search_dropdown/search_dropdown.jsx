import React from 'react';
import SearchDropdownItem from './search_dropdown_item';

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchRegions();
  }

  render() {
    let allRegions = this.props.regions.map((region, idx) => (
      <SearchDropdownItem region={region} key={idx}/>
    ));

    let divStyle = {
      position: "relative"
    };

    let style = {};

    if (this.props.location === "/") {
      style = {
        position: "absolute",
        top: 400
      };
    } else {
      style = {};
    }


    return (
      <div className="regions-dropdown" style={divStyle}>
        <select style={style}>
          <option>Select a region:</option>
          {allRegions}
        </select>
      </div>
    );
  }
}

export default SearchDropdown;