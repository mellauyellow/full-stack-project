import { RECEIVE_NEIGHBORHOOD } from '../actions/neighborhoods_actions';

const _nullState = {};

const NeighborhoodReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_NEIGHBORHOOD:
      return action.neighborhood;
    default:
      return oldState;
  }
};

export default NeighborhoodReducer;
