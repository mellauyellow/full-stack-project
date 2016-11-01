import { LOGIN,
         LOGOUT,
         SIGNUP,
         receiveCurrentUser,
         receiveErrors } from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const receiveCurrentUserSuccess = (user) => dispatch(receiveCurrentUser(user));
  const errorsCallback = (errors) => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, receiveCurrentUserSuccess, errorsCallback);
      return next(action);
    case SIGNUP:
      signup(action.user, receiveCurrentUserSuccess, errorsCallback);
      return next(action);
    case LOGOUT:
      logout(next(action));
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
