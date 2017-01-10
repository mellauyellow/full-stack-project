import React from 'react';
import { Link } from 'react-router';
import NeighborhoodResultItem from './neighborhood_result_item';

class Region extends React.Component {
  constructor(props) {
    super(props);

    this.containsNeighborhoodImage = this.containsNeighborhoodImage.bind(this);
    this.neighborhoodsElements = this.neighborhoodsElements.bind(this);
    this.generateCropURL = this.generateCropURL.bind(this);
  }

  containsNeighborhoodImage(neighborhoodId) {
    if (this.props.region.images) {
      let allImages = this.props.region.images.filter(image => (image.neighborhood_id === neighborhoodId));
      if (allImages.length > 0) {
        return allImages;
      } else {
        return null;
      }
    }
  }

  neighborhoodsElements() {
    if (this.props.region.neighborhoods) {
      let neighborhoods = this.props.region.neighborhoods.map((neighborhood, idx) => {
        let imageItem = <div></div>;
        let image = this.containsNeighborhoodImage(neighborhood.id);

        if (image) {
          let style = { backgroundImage: 'url(' + this.generateCropURL(image[0].url) + ')'};
          let path = `neighborhood/${neighborhood.id}`;
          imageItem =
          (<Link to={path}>
            <div style={style}></div>
          </Link>);
        }

        return (
          <div className="neighborhood-result-item" key={idx}>
            {imageItem}
            <NeighborhoodResultItem neighborhood={neighborhood}/>
          </div>
        );
      });

      if (neighborhoods.length > 0) {
        return neighborhoods;
      } else {
        return <h4>No matches.</h4>;
      }
    }
  }

  generateCropURL(url) {
    let cropString = 'c_thumb,g_center,h_100,w_100/';
    let sliceIdx = url.indexOf('d/') + 2;
    return url.slice(0, sliceIdx) + cropString + url.slice(sliceIdx);
  }

  render() {
    let neighborhoods = this.neighborhoodsElements();

    if (this.props.region) {
      return (
        <div className="region-results">
          <div className="neighborhood-results">
            {neighborhoods}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default Region;
