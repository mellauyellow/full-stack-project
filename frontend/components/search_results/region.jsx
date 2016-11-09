import React from 'react';
import NeighborhoodResultItem from './neighborhood_result_item';
import SearchResultsMap from './search_results_map';
import SearchFilters from './search_filters';

class Region extends React.Component {
  constructor(props) {
    super(props);

    this.containsNeighborhoodImage = this.containsNeighborhoodImage.bind(this);
    this.neighborhoodsElements = this.neighborhoodsElements.bind(this);
  }

  componentDidMount() {
    this.props.fetchRegion(this.props.params.id);
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

    return (
      <div className="region-results">
        <SearchFilters region={this.props.region} router={this.props.router} query={this.props.query} fetchRegion={this.props.fetchRegion}/>
        <h3>Search results for {this.props.region.name}, {this.props.region.state}:</h3>
        <div className="region-results-content">
          <div className="neighborhood-results">
            {neighborhoods}
          </div>
          <SearchResultsMap region={this.props.region} router={this.props.router}/>
        </div>
      </div>
    );
  }
}

export default Region;
