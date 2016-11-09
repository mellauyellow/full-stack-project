import React from 'react';
import NeighborhoodResultItem from './neighborhood_result_item';

class Region extends React.Component {
  constructor(props) {
    super(props);

    this.containsNeighborhoodImage = this.containsNeighborhoodImage.bind(this);
    this.neighborhoodsElements = this.neighborhoodsElements.bind(this);
  }
  //
  // componentDidMount() {
  //   this.props.fetchRegion(this.props.params.id);
  // }

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
          let style = { backgroundImage: 'url(' + image[0].url + ')'};
          imageItem = <div style={style}></div>;
        }

        return (
          <div className="neighborhood-result-item" key={idx}>
            {imageItem}
            <NeighborhoodResultItem neighborhood={neighborhood}/>
          </div>
        );
      });

      return neighborhoods;
    }
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
