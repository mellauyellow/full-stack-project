import { FETCH_SEARCH_REGION, receiveSearchRegion } from '../actions/search_actions';
import { fetchRegion } from '../util/regions_api_util';

const SearchMiddleware = ({getState, dispatch}) => next => action => {
  const receiveRegionSuccess = (region) => dispatch(receiveSearchRegion(region));

  switch (action.type) {
    case FETCH_SEARCH_REGION:
      fetchRegion(action.regionId, action.filters, receiveRegionSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
