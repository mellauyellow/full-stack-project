import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

window.signup = actions.signup;
window.login = actions.login;
window.logout = actions.logout;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
