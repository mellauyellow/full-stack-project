export const FETCH_REGIONS = "FETCH_REGIONS";
export const RECEIVE_REGIONS = "RECEIVE_REGIONS";
export const FETCH_REGION = "FETCH_REGION";
export const RECEIVE_REGION = "RECEIVE_REGION";

export const fetchRegions = () => ({
  type: FETCH_REGIONS
});

export const receiveRegions = (regions) => ({
  type: RECEIVE_REGIONS,
  regions
});

export const fetchRegion = (regionId, filters) => ({
  type: FETCH_REGION,
  regionId,
  filters
});

export const receiveRegion = (region) => ({
  type: RECEIVE_REGION,
  region
});
