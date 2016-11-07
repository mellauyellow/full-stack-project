export const FETCH_IMAGES = "FETCH_IMAGES";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";

export const fetchImages = (neighborhoodId) => ({
  type: FETCH_IMAGES,
  neighborhoodId
});

export const receiveImages = (images) => ({
  type: RECEIVE_IMAGES,
  images
});

export const uploadImage = (image, neighborhoodId) => ({
  type: UPLOAD_IMAGE,
  image,
  neighborhoodId
});

export const receiveImage = (image) => ({
  type: RECEIVE_IMAGE,
  image
});
