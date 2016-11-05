import React from 'react';
import NeighborhoodImage from './neighborhood_image';
import NeighborhoodHeader from './neighborhood_header';
import NeighborhoodMap from './neighborhood_map';
import NeighborhoodReviewIndex from './neighborhood_review_index';
import NeighborhoodImagesSlideshow from './neighborhood_images_slideshow';
import ReviewForm from './review_form/review_form';

class NeighborhoodPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="neighborhood-page">
        <ReviewForm currentUser={this.props.currentUser} neighborhood={this.props.neighborhood} postReview={this.props.postReview} />
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
