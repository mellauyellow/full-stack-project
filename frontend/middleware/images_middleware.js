import { FETCH_IMAGES, receiveImages } from '../actions/images_actions';
import { fetchImages } from '../util/images_api_util';

const ImagesMiddleware = ({getState, dispatch}) => next => action => {
  const receiveImagesSuccess = (images) => dispatch(receiveImages(images));

  switch (action.type) {
    case FETCH_IMAGES:
      fetchImages(action.neighborhoodId, receiveImagesSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ImagesMiddleware;
