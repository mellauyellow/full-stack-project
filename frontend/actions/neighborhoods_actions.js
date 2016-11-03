export const FETCH_NEIGHBORHOODS = "FETCH_NEIGHBORHOODS";
export const RECEIVE_NEIGHBORHOODS = "RECEIVE_NEIGHBORHOODS";
export const FETCH_NEIGHBORHOOD = "FETCH_NEIGHBORHOOD";
export const RECEIVE_NEIGHBORHOOD = "RECEIVE_NEIGHBORHOOD";

export const fetchNeighborhoods = (region) => ({
  type: FETCH_NEIGHBORHOODS,
  region
});

export const receiveNeighborhoods = (neighborhoods) => ({
  type: RECEIVE_NEIGHBORHOODS,
  neighborhoods
});

export const fetchNeighborhood = (id) => ({
  type: FETCH_NEIGHBORHOOD,
  id
});

export const receiveNeighborhood = (neighborhood) => ({
  type: RECEIVE_NEIGHBORHOOD,
  neighborhood
});
