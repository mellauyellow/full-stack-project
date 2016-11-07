import { RECEIVE_IMAGES, RECEIVE_IMAGE } from '../actions/images_actions';
import { merge } from 'lodash';

const _nullState = {};

const ImagesReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    case RECEIVE_IMAGE:
      let newState = merge({}, oldState, action.image);
      return newState;
    default:
      return oldState;
  }
};

export default ImagesReducer;
