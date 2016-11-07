import { RECEIVE_REGION } from '../actions/regions_actions';

const _nullState = {};

const RegionReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_REGION:
      return action.region;
    default:
      return oldState;
  }
};

export default RegionReducer;
