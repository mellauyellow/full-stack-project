import React from 'react';
import { Link } from 'react-router';

class SearchResultsMap extends React.Component {
  constructor(props) {
    super(props);
    this.addNeighborhoodMarker = this.addNeighborhoodMarker.bind(this);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.regionMap;

    let latInt = this.props.region.center_lat;
    let longInt = this.props.region.center_long;

    const pos = new google.maps.LatLng(latInt, longInt);

    const mapOptions = {
      center: pos,
      zoom: 12
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.props.region.neighborhoods.forEach(neighborhood => (
      this.addNeighborhoodMarker(neighborhood)
    ));
  }

  addNeighborhoodMarker(neighborhood) {
    let pos = new google.maps.LatLng(neighborhood.center_lat, neighborhood.center_long);
    // let link = `/neighborhood`
    let contentString = `<Link to=><h5>${neighborhood.name}</h5></Link>`
    let marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   const mapDOMNode = this.refs.regionMap;
  //
  //   let latInt = nextProps.region.center_lat;
  //   let longInt = nextProps.region.center_long;
  //
  //   const pos = new google.maps.LatLng(latInt, longInt);
  //
  //   const mapOptions = {
  //     center: pos,
  //     zoom: 8
  //   };
  //
  //   this.map = new google.maps.Map(mapDOMNode, mapOptions);
  // }

  render()  {
    return (
      <div className="region-map" id="region-map-container" ref="regionMap"></div>
    );
  }
}

export default SearchResultsMap;
