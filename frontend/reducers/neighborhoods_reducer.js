import { merge } from 'lodash';
import { RECEIVE_NEIGHBORHOODS, RECEIVE_NEIGHBORHOOD } from '../actions/neighborhoods_actions';

const _nullState = {
  searchResults: [],
  currentNeighborhood: {}
};

const NeighborhoodsReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_NEIGHBORHOODS:
      let newState = merge({}, oldState);
      newState.searchResults = action.neighborhoods;
      return newState;
    case RECEIVE_NEIGHBORHOOD:
      newState = merge({}, oldState);
      newState.currentNeighborhood = action.neighborhood;
      return newState;
    default:
      return oldState;
  }
};

export default NeighborhoodsReducer;
