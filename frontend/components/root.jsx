import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SignupFormContainer from './signup/signup_form_container';
import SessionFormContainer from './header/session/session_form_container';

const Root = ({store}) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    let currentUser = store.getState().session.currentUser.username;
    if (currentUser) {
      replace("/");
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SignupFormContainer} onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
