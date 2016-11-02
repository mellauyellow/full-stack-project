import { RECEIVE_REGIONS } from '../actions/regions_actions';

const _nullState = [];

const RegionsReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REGIONS:
      return action.regions;
    default:
      return oldState;
  }
};

export default RegionsReducer;
