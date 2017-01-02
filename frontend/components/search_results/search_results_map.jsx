import React from 'react';
import { Link } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';

class SearchResultsMap extends React.Component {
  constructor(props) {
    super(props);
    this.addNeighborhoodMarker = this.addNeighborhoodMarker.bind(this);
  }

  // componentDidMount() {
  //   if (this.map) {
  //     this.map.addListener('idle', () => {
  //       const { south, west, north, east } = this.map.getBounds().toJSON();
  //       const boundsString = `north=${north}&south=${south}&west=${west}&east=${east}`;
  //       // const bounds = {
  //       //   northEast: { lat: north, long: east },
  //       //   southWest: { lat: south, long: west }
  //       // };
  //       // console.log(boundsString);
  //       this.props.fetchRegion(this.props.region.id, boundsString);
  //     });
  //   }
  // }

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
      map: this.map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });

    marker.addListener('click', () => (
      this.props.router.push(path)
    ));

    marker.addListener('mouseover', () => {
      infowindow.open(this.map, marker);
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    });

    marker.addListener('mouseout', () => {
      infowindow.close();
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    });
  }

  render()  {
    return (
      <StickyContainer className="sticky-container">
        <Sticky stickyClassName="sticky-active" className="sticky-inactive">
          <div className="region-map" id="region-map-container" ref="regionMap"></div>
        </Sticky>
      </StickyContainer>
    );
  }
}

export default SearchResultsMap;
