import React from 'react';

const NeighborhoodReviewItem = ({review}) => (
  <li>{review.user.first_name} {review.user.last_name.slice(0, 1)}. : {review.body}</li>
);

export default NeighborhoodReviewItem;
