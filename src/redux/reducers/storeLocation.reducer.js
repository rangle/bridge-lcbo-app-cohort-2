import { STORE_LOCATION_ACTIONS } from "../actions/storeLocation.actions";

const DEFAULT_STATE = {
  storeList: [],
  latLng: { lat: 43.6532, lng: -79.3832 }, // same as TOR_LAT_LNG
};

export const storeLocationReducer = (state = DEFAULT_STATE, action) => {
  console.log(9, action)
  switch (action.type) {
    case STORE_LOCATION_ACTIONS.SEND_STORES_BY_PRODUCT_IDS:
      return {
        ...state,
        storeList: action.payload,
      };
    case STORE_LOCATION_ACTIONS.SET_USER_CURRENT_LOCATION:
      console.log({
        ...state,
        latLng: action.payload,
      })
      return {
        ...state,
        latLng: action.payload,
      };
    default:
      return state;
  }
};

export default storeLocationReducer;
