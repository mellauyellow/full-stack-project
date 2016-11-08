import React from 'react';

class NeighborhoodMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const mapDOMNode = this.refs.map;
    let latInt = parseFloat(nextProps.currentNeighborhood.center_lat);
    let longInt = parseFloat(nextProps.currentNeighborhood.center_long);

    const pos = new google.maps.LatLng(latInt, longInt);

    const mapOptions = {
      center: pos,
      zoom: 14
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
  }

  render() {
    return (
      <div className="neighborhood-map" id="neighborhood-map-container" ref="map">

      </div>
    );
  }
}

export default NeighborhoodMap;
