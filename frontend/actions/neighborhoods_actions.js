export const FETCH_NEIGHBORHOODS = "FETCH_NEIGHBORHOODS";
export const RECEIVE_NEIGHBORHOODS = "RECEIVE_NEIGHBORHOODS";
export const FETCH_NEIGHBORHOOD = "FETCH_NEIGHBORHOOD";
export const RECEIVE_NEIGHBORHOOD = "RECEIVE_NEIGHBORHOOD";

export const fetchNeighborhoods = (regionId) => ({
  type: FETCH_NEIGHBORHOODS,
  regionId
});

export const receiveNeighborhoods = (neighborhoods) => ({
  type: RECEIVE_NEIGHBORHOODS,
  neighborhoods
});

export const fetchNeighborhood = (neighborhoodId) => ({
  type: FETCH_NEIGHBORHOOD,
  neighborhoodId
});

export const receiveNeighborhood = (neighborhood) => ({
  type: RECEIVE_NEIGHBORHOOD,
  neighborhood
});
