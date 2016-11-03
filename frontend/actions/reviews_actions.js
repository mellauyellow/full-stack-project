export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const fetchReviews = (neighborhoodId) => ({
  type: FETCH_REVIEWS,
  neighborhoodId
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});
