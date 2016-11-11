import { RECEIVE_REVIEWS, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from '../actions/reviews_actions';
import { merge } from 'lodash';

const _nullState = {
  allReviews: [],
  errors: {}
};

const ReviewsReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      let newState = merge({}, oldState);
      newState.allReviews = action.reviews;
      return newState;
    case RECEIVE_REVIEW:
      newState = merge({}, oldState);
      let allReviews = oldState.allReviews.slice(0);
      let newReviews = allReviews.filter(review => (review.id !== action.review.id));
      newReviews.unshift(action.review);
      newState.allReviews = newReviews;
      newState.errors = {};
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;
    case CLEAR_REVIEW_ERRORS:
      newState = merge({}, oldState);
      newState.errors = {};
      return newState;
    default:
      return oldState;
  }
};

export default ReviewsReducer;
