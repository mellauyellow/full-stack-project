import React from 'react';
import NeighborhoodTrendingWords from './neighborhood_trending_words';
import NeighborhoodReviewItem from './neighborhood_review_item';

const NeighborhoodReviewIndex = ({reviews, name, images, currentUser}) => {
  let imageKeys = Object.keys(images);
  let allReviews;

  if (reviews) {
    allReviews = reviews.map((review, idx) => {
      let reviewImages = [];
      imageKeys.forEach(key => {
        if (images[key].hasOwnProperty('review_id') && images[key].review_id === review.id) {
          reviewImages.push(images[key]);
        }
      });

      return (
        <NeighborhoodReviewItem review={review} key={idx} images={reviewImages} currentUser={currentUser}/>
      );
    });
  }

  return (
    <div className="neighborhood-review-index">
      <NeighborhoodTrendingWords reviews={reviews} />
      <div className="review-items">
        <h4>Recommended reviews for {name}</h4>
        <h5>{reviews.length} reviews</h5>
        <ul>
          {allReviews}
        </ul>
      </div>
    </div>
  );
};

export default NeighborhoodReviewIndex;
