import { RECEIVE_IMAGES } from '../actions/images_actions';

const _nullState = {};

const ImagesReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    default:
      return oldState;
  }
};

export default ImagesReducer;
