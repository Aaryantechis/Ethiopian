export const FETCH_PLACES = "FETCH_PLACES";
export const fetchPlacesAction = (places) => {
  return {
    type: FETCH_PLACES,
    list: places,
  };
};
