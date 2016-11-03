import { FETCH_NEIGHBORHOODS,
         FETCH_NEIGHBORHOOD,
         receiveNeighborhoods,
         receiveNeighborhood } from '../actions/neighborhood_actions';
import { fetchNeighborhoods, fetchNeighborhood } from '../util/neighborhood_api_util';

const NeighborhoodMiddleware = ({getState, dispatch}) => next => action => {
  const receiveNeighborhoodsSuccess = (neighborhoods) => dispatch(receiveNeighborhoods(neighborhoods));
  const receiveNeighborhoodSuccess = (neighborhood) => dispatch(receiveNeighborhood(neighborhood));

  switch (action.type) {
    case FETCH_NEIGHBORHOODS:
      fetchNeighborhoods(receiveNeighborhoodsSuccess);
      return next(action);
    case FETCH_NEIGHBORHOOD:
      fetchNeighborhood(receiveNeighborhoodSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default NeighborhoodMiddleware;
