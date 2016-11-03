import { RECEIVE_REVIEWS } from '../actions/reviews_actions';

const _nullState = [];

const ReviewsReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return oldState;
  }
};

export default ReviewsReducer;
