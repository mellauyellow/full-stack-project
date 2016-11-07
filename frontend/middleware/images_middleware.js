import { FETCH_IMAGES, receiveImages, UPLOAD_IMAGE, receiveImage } from '../actions/images_actions';
import { fetchImages, uploadImage } from '../util/images_api_util';

const ImagesMiddleware = ({getState, dispatch}) => next => action => {
  const receiveImagesSuccess = (images) => dispatch(receiveImages(images));
  const receiveImageSuccess = (image) => dispatch(receiveImage(image));

  switch (action.type) {
    case FETCH_IMAGES:
      fetchImages(action.neighborhoodId, receiveImagesSuccess);
      return next(action);
    case UPLOAD_IMAGE:
      uploadImage(action.image, action.neighborhoodId, receiveImageSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ImagesMiddleware;
