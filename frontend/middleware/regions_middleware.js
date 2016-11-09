import { FETCH_REGIONS, receiveRegions, FETCH_REGION, receiveRegion } from '../actions/regions_actions';
import { fetchRegions, fetchRegion } from '../util/regions_api_util';

const RegionsMiddleware = ({getState, dispatch}) => next => action => {
  const fetchRegionsSuccess = (regions) => dispatch(receiveRegions(regions));
  const fetchRegionSuccess = (region) => dispatch(receiveRegion(region));

  switch (action.type) {
    case FETCH_REGIONS:
      fetchRegions(fetchRegionsSuccess);
      return next(action);
    case FETCH_REGION:
      fetchRegion(action.regionId, action.filters, fetchRegionSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default RegionsMiddleware;
