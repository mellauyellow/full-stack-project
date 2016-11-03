import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import * as apiActions from './util/session_api_util';
import * as regionsActions from './actions/regions_actions';
import * as neighborhoodActions from './actions/neighborhoods_actions';
import * as apiNeighborhoodActions from './util/neighborhoods_api_util';

window.fetchNeighborhoods = neighborhoodActions.fetchNeighborhoods;
window.fetchNeighborhood = neighborhoodActions.fetchNeighborhood;
window.fetchRegions = regionsActions.fetchRegions;
window.apiFetchNeighborhoods = apiNeighborhoodActions.fetchNeighborhoods;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
