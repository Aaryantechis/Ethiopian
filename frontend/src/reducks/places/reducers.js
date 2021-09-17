import * as Actions from "./actions";
import initialState from "../store/initialState";

export const PlacesReducer = (state = initialState.places, action) => {
  switch (action.type) {
    case Actions.FETCH_PLACES:
      return {
        ...state,
        list: action.list,
      };

    default:
      return state;
  }
};
