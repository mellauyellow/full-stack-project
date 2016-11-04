export const fetchImages = (neighborhoodId, success, error) => {
  $.ajax({
  method: 'GET',
  url: `api/neighborhoods/${neighborhoodId}/images`,
  success,
  error
  });
};
