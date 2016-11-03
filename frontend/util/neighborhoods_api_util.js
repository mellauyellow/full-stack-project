export const fetchNeighborhoods = (success, error) => {
  $.ajax({
  method: 'GET',
  url: 'api/neighborhoods',
  success,
  error
  });
};

export const fetchNeighborhood = (id, success, error) => {
  $.ajax({
  method: 'GET',
  url: `api/regions/${id}`,
  success,
  error
  });
};
