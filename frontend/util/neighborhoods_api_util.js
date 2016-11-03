export const fetchNeighborhoods = (regionId, success, error) => {
  $.ajax({
  method: 'GET',
  url: `api/regions/${regionId}/neighborhoods`,
  success,
  error
  });
};

export const fetchNeighborhood = (neighborhoodId, success, error) => {
  $.ajax({
  method: 'GET',
  url: `api/neighborhoods/${neighborhoodId}`,
  success,
  error
  });
};
