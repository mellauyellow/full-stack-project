export const FETCH_SEARCH_REGION = "FETCH_SEARCH_REGION";
export const RECEIVE_SEARCH_REGION = "RECEIVE_SEARCH_REGION";

export const fetchSearchRegion = (regionId, filters) => ({
  type: FETCH_SEARCH_REGION,
  regionId,
  filters
});

export const receiveSearchRegion = (region) => ({
  type: RECEIVE_SEARCH_REGION,
  region
});
