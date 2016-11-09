export const fetchRegions = (success, error) => {
  $.ajax({
  method: 'GET',
  url: 'api/regions',
  success,
  error
  });
};

export const fetchRegion = (regionId, filters, success, error) => {
  $.ajax({
  method: 'GET',
  url: `api/regions/${regionId}?${filters}`,
  success,
  error
  });
};
