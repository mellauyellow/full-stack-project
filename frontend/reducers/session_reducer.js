import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT } from '../actions/session_actions.js';

const _nullState = {
  currentUser: {},
  errors: []
};

const SessionReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, oldState);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, oldState);
      newState.currentUser = {};
      newState.errors = action.errors;
      return newState;
    case LOGOUT:
      return _nullState;
    default:
      return oldState;
  }
};

export default SessionReducer;
