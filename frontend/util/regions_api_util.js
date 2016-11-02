export const fetchRegions = (success, error) => {
  $.ajax({
  method: 'GET',
  url: 'api/regions',
  success,
  error
  });
};
