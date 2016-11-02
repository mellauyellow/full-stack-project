import { FETCH_REGIONS, receiveRegions } from '../actions/regions_actions';
import { fetchRegions } from '../util/regions_api_util';

const RegionsMiddleware = ({getState, dispatch}) => next => action => {
  const fetchRegionsSuccess = (regions) => dispatch(receiveRegions(regions));

  switch (action.type) {
    case FETCH_REGIONS:
      fetchRegions(fetchRegionsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default RegionsMiddleware;
