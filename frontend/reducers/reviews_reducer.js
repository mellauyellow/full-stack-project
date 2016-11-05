import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/reviews_actions';

const _nullState = [];

const ReviewsReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      let newState = oldState.slice(0);
      newState.push(action.review);
      return newState;
    default:
      return oldState;
  }
};

export default ReviewsReducer;
