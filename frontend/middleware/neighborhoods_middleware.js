import { FETCH_NEIGHBORHOODS,
         FETCH_NEIGHBORHOOD,
         receiveNeighborhoods,
         receiveNeighborhood } from '../actions/neighborhoods_actions';
import { fetchNeighborhoods, fetchNeighborhood } from '../util/neighborhoods_api_util';
import { fetchReviews } from '../actions/reviews_actions';
import { fetchImages } from '../actions/images_actions';

const NeighborhoodsMiddleware = ({getState, dispatch}) => next => action => {
  const receiveNeighborhoodsSuccess = (neighborhoods) => dispatch(receiveNeighborhoods(neighborhoods));
  const receiveNeighborhoodSuccess = (neighborhood) => {
    dispatch(receiveNeighborhood(neighborhood));
    dispatch(fetchReviews(neighborhood.id));
    dispatch(fetchImages(neighborhood.id));
  };

  switch (action.type) {
    case FETCH_NEIGHBORHOODS:
      fetchNeighborhoods(action.regionId, receiveNeighborhoodsSuccess);
      return next(action);
    case FETCH_NEIGHBORHOOD:
      fetchNeighborhood(action.neighborhoodId, receiveNeighborhoodSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default NeighborhoodsMiddleware;
