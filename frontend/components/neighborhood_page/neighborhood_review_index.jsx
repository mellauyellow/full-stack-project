import React from 'react';
import NeighborhoodTrendingWords from './neighborhood_trending_words';
import NeighborhoodReviewItem from './neighborhood_review_item';

const NeighborhoodReviewIndex = ({reviews, name}) => {
  let allReviews;

  if (reviews) {
    allReviews = reviews.map((review, idx) => (
      <NeighborhoodReviewItem review={review} key={idx} />
    ));
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
