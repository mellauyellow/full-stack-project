export const fetchReviews = (neighborhoodId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/neighborhoods/${neighborhoodId}/reviews`,
    success,
    error
  });
};

export const postReview = (review, neighborhoodId, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/neighborhoods/${neighborhoodId}/reviews`,
    data: { review },
    success,
    error
  });
};
