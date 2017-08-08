import { STORE_LOCATION_ACTIONS } from "../actions/storeLocation.actions"

export const storeLocationReducer = (state = [], action) => {
  switch (action.type) {
    case STORE_LOCATION_ACTIONS.SEND_STORES_BY_PRODUCT_IDS:
      return [...action.payload]
    default:
      return state
  }
}

export default storeLocationReducer
