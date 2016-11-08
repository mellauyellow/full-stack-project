import React from 'react';
import SearchDropdownItem from './search_dropdown_item';

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchRegions();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let regionId = e.target.value;
    let path = `/search-results/${regionId}`;
    this.props.router.push(path);
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
        left: -50
      };
      selectStyle = {
        fontSize: 18,
        color: "silver",
        borderRadius: 2,
        background: 'url(http://www.scottgood.com/jsg/blog.nsf/images/arrowdown.gif) no-repeat 90% 50%',
        backgroundColor: "white"
      };
    } else {
      selectStyle = {
        fontSize: 14
      };
    }

    return (
      <div className="regions-dropdown" style={divStyle}>
        <div className="dropdown" style={classStyle}>
          <select onChange={this.handleChange} style={selectStyle} value="default">
            <option value="default">Select a region:</option>
            {allRegions}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchDropdown;
