export const fetchImages = (neighborhoodId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/neighborhoods/${neighborhoodId}/images`,
    success,
    error
  });
};

export const uploadImage = (image, neighborhoodId, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/neighborhoods/${neighborhoodId}/images`,
    data: { image },
    success,
    error
  });
};
