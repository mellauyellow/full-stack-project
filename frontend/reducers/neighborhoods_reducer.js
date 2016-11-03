import { union } from 'lodash';
import { RECEIVE_NEIGHBORHOODS } from '../actions/neighborhoods_actions';

const _nullState = [];

const NeighborhoodsReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_NEIGHBORHOODS:
      return action.neighborhoods;
    default:
      return oldState;
  }
};

export default NeighborhoodsReducer;
