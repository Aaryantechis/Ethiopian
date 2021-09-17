export const FETCH_POST = "FETCH_PLACES";
export const fetchPlacesAction = (places) => {
  return {
    type: "FETCH_PLACES",
    payload: places,
  };
};
