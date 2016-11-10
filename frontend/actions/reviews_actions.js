export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const POST_REVIEW = "POST_REVIEW";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

export const fetchReviews = (neighborhoodId) => ({
  type: FETCH_REVIEWS,
  neighborhoodId
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const postReview = (review, neighborhoodId) => ({
  type: POST_REVIEW,
  review,
  neighborhoodId
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});
