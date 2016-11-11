import { FETCH_REVIEWS,
         receiveReviews,
         POST_REVIEW,
         receiveReview,
         RECEIVE_REVIEW,
         receiveReviewErrors,
         DELETE_REVIEW,
         UPDATE_REVIEW } from '../actions/reviews_actions';
import { fetchImages } from '../actions/images_actions';
import { fetchReviews, postReview, deleteReview, updateReview } from '../util/reviews_api_util';

const ReviewsMiddleware = ({getState, dispatch}) => next => action => {
  const receiveReviewsSuccess = (reviews) => dispatch(receiveReviews(reviews));
  const receiveReviewSuccess = (review) => {
    dispatch(receiveReview(review));
    dispatch(fetchImages(review.neighborhood_id));
  };
  const errorsCallback = (errors) => dispatch(receiveReviewErrors(errors.responseJSON));

  switch (action.type) {
    case FETCH_REVIEWS:
      fetchReviews(action.neighborhoodId, receiveReviewsSuccess);
      return next(action);
    case POST_REVIEW:
      postReview(action.review, action.neighborhoodId, receiveReviewSuccess, errorsCallback);
      return next(action);
    case DELETE_REVIEW:
      deleteReview(action.reviewId, action.neighborhoodId, receiveReviewsSuccess);
      return next(action);
    case UPDATE_REVIEW:
      updateReview(action.reviewId, action.neighborhoodId, action.review, receiveReviewSuccess, errorsCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default ReviewsMiddleware;
