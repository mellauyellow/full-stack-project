import React from 'react';
import { Link } from 'react-router';

class SearchResultsMap extends React.Component {
  constructor(props) {
    super(props);
    this.addNeighborhoodMarker = this.addNeighborhoodMarker.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const mapDOMNode = this.refs.regionMap;

    let latInt = nextProps.region.center_lat;
    let longInt = nextProps.region.center_long;

    const pos = new google.maps.LatLng(latInt, longInt);

    let mapOptions = {
      center: pos,
      zoom: 10
    };

    if (latInt === 37.7575435) {
      mapOptions = {
        center: pos,
        zoom: 12
      };
    } else if (latInt === 40.741218) {
      mapOptions.zoom = 11;
    }

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    if (nextProps.region.neighborhoods) {
      nextProps.region.neighborhoods.forEach(neighborhood => (
        this.addNeighborhoodMarker(neighborhood)
      ));
    }
  }

  addNeighborhoodMarker(neighborhood) {
    let pos = new google.maps.LatLng(neighborhood.center_lat, neighborhood.center_long);
    let path = `/neighborhood/${neighborhood.id}`;
    let contentString = `<h5>${neighborhood.name}</h5>`;

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    let marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    marker.addListener('click', () => (
      this.props.router.push(path)
    ));

    marker.addListener('mouseover', () => (
      infowindow.open(this.map, marker)
    ));

    marker.addListener('mouseout', () => (
      infowindow.close()
    ));
  }

  render()  {
    return (
      <div className="region-map" id="region-map-container" ref="regionMap"></div>
    );
  }
}

export default SearchResultsMap;
