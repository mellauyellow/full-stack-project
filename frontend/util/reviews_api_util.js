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

export const deleteReview = (reviewId, neighborhoodId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/neighborhoods/${neighborhoodId}/reviews/${reviewId}`,
    success,
    error
  });
};
