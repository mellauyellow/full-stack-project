import { FETCH_REVIEWS, receiveReviews } from '../actions/reviews_actions';
import { fetchReviews } from '../util/reviews_api_util';

const ReviewsMiddleware = ({getState, dispatch}) => next => action => {
  const receiveReviewsSuccess = (reviews) => dispatch(receiveReviews(reviews));

  switch (action.type) {
    case FETCH_REVIEWS:
      fetchReviews(action.neighborhoodId, receiveReviewsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ReviewsMiddleware;
