export const FETCH_IMAGES = "FETCH_IMAGES";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";

export const fetchImages = (neighborhoodId) => ({
  type: FETCH_IMAGES,
  neighborhoodId
});

export const receiveImages = (images) => ({
  type: RECEIVE_IMAGES,
  images
});
