import { RECEIVE_SEARCH_REGION } from '../actions/search_actions';

const _nullState = {};

const SearchReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_REGION:
      return action.region;
    default:
      return oldState;
  }
};

export default SearchReducer;
