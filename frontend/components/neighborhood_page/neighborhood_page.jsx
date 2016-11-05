import React from 'react';
import NeighborhoodImage from './neighborhood_image';
import NeighborhoodHeader from './neighborhood_header';
import NeighborhoodMap from './neighborhood_map';
import NeighborhoodReviewIndex from './neighborhood_review_index';
import NeighborhoodImagesSlideshow from './neighborhood_images_slideshow';

class NeighborhoodPage extends React.Component {
  constructor(props) {
    super(props);
    // this.props.fetchNeighborhood(1);
  }

  // componentDidMount() {
  //   this.props.fetchNeighborhood(this.props.routeParams.id);
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchNeighborhood(nextProps.routeParams.id);
  // }

  // componentWillUpdate() {
  //   this.props.fetchNeighborhood(this.props.routeParams.id);
  // }

  render() {
    return (
      <div className="neighborhood-page">
        <NeighborhoodImage images={this.props.images}/>
        <NeighborhoodHeader neighborhood={this.props.neighborhood} />
        <div className="below-neighborhood-header">
          <div className="all-review-content">
            <NeighborhoodReviewIndex reviews={this.props.reviews} name={this.props.neighborhood.name} images={this.props.images}/>
          </div>
          <NeighborhoodMap currentNeighborhood={this.props.neighborhood} />
        </div>
      </div>
    );
  }
}

export default NeighborhoodPage;
