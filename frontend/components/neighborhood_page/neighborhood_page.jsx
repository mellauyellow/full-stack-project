import React from 'react';
import NeighborhoodImage from './neighborhood_image';
import NeighborhoodHeader from './neighborhood_header';
import NeighborhoodMap from './neighborhood_map';
import NeighborhoodReviewIndex from './neighborhood_review_index';
import NeighborhoodImagesSlideshow from './neighborhood_images_slideshow';

class NeighborhoodPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="neighborhood-page">
        <NeighborhoodImage images={this.props.images}/>
        <NeighborhoodHeader clearReviewErrors={this.props.clearReviewErrors} neighborhood={this.props.neighborhood} currentUser={this.props.currentUser} postReview={this.props.postReview} uploadImage={this.props.uploadImage} errors={this.props.errors} reviews={this.props.reviews}/>
        <div className="below-neighborhood-header">
          <div className="all-review-content">
            <NeighborhoodReviewIndex
              reviews={this.props.reviews}
              neighborhood={this.props.neighborhood}
              images={this.props.images}
              currentUser={this.props.currentUser}
              deleteReview={this.props.deleteReview}
              fetchImages={this.props.fetchImages}
              clearReviewErrors={this.props.clearReviewErrors}
              errors={this.props.errors}
              updateReview={this.props.updateReview}
              uploadImage={this.props.uploadImage}/>
          </div>
          <NeighborhoodMap currentNeighborhood={this.props.neighborhood} />
        </div>
      </div>
    );
  }
}

export default NeighborhoodPage;
