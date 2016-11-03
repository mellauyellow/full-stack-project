import React from 'react';
import NeighborhoodTrendingWords from './neighborhood_trending_words';
import NeighborhoodReviewItem from './neighborhood_review_item';

const NeighborhoodReviewIndex = ({reviews}) => {
  let allReviews;

  if (reviews) {
    allReviews = reviews.map((review, idx) => (
      <NeighborhoodReviewItem review={review} key={idx} />
    ));
  }

  return (
    <div className="neighborhood-review-index'">
      <NeighborhoodTrendingWords reviews={reviews} />
      <ul>
        {allReviews}
      </ul>
    </div>
  );
};

export default NeighborhoodReviewIndex;
