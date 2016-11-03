export const fetchReviews = (neighborhoodId, success, error) => {
  $.ajax({
  method: 'GET',
  url: `api/neighborhoods/${neighborhoodId}/reviews`,
  success,
  error
  });
};
