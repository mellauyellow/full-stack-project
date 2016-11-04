import React from 'react';
import NeighborhoodImage from './neighborhood_image';
import NeighborhoodHeader from './neighborhood_header';
import NeighborhoodMap from './neighborhood_map';
import NeighborhoodReviewIndex from './neighborhood_review_index';

class NeighborhoodPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchNeighborhood(1);
  }

  render() {
    return (
      <div className="neighborhood-page">
        <NeighborhoodImage images={this.props.images}/>
        <NeighborhoodHeader neighborhood={this.props.neighborhood} />
        <div className="below-neighborhood-header">
          <div className="all-review-content">
            <NeighborhoodReviewIndex reviews={this.props.reviews} name={this.props.neighborhood.name}/>
          </div>
          <NeighborhoodMap currentNeighborhood={this.props.neighborhood} />
        </div>
      </div>
    );
  }
}

export default NeighborhoodPage;
