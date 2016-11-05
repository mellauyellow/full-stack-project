import { FETCH_REVIEWS, receiveReviews, POST_REVIEW, receiveReview } from '../actions/reviews_actions';
import { fetchReviews, postReview } from '../util/reviews_api_util';

const ReviewsMiddleware = ({getState, dispatch}) => next => action => {
  const receiveReviewsSuccess = (reviews) => dispatch(receiveReviews(reviews));
  const receiveReviewSuccess = (review) => dispatch(receiveReview(review));

  switch (action.type) {
    case FETCH_REVIEWS:
      fetchReviews(action.neighborhoodId, receiveReviewsSuccess);
      return next(action);
    case POST_REVIEW:
      postReview(action.review, action.neighborhoodId, receiveReviewSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ReviewsMiddleware;
