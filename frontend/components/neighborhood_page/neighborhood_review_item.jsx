import React from 'react';

const NeighborhoodReviewItem = ({review}) => (
  <li>
    <div className="reviewer-content">
      <img src={review.user.profile_pic_url}></img>
      <h5>{review.user.first_name} {review.user.last_name.slice(0, 1)}.</h5>
      <h6>Zip Code: {review.user.zip_code}</h6>
    </div>
    <div className="review-body">
      <h5>{review.body}</h5>
    </div>
  </li>
);

export default NeighborhoodReviewItem;
