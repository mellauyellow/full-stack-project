export const fetchRegions = (success, error) => {
  $.ajax({
  method: 'GET',
  url: 'api/regions',
  success,
  error
  });
};

export const fetchRegion = (regionId, success, error) => {
  $.ajax({
  method: 'GET',
  url: `api/regions/${regionId}`,
  success,
  error
  });
};
