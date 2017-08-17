import {
  STORE_LOCATION_ACTIONS,
  sendStoresByProductIDs
} from "../actions/storeLocation.actions"

import { LCBO_API_KEY, LCBO_BASE_URL } from "../constants"

const productIDs = ids => ids.join(",")

export const getStoreLocations = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS)
    .mergeMap(action =>
      ajax(
        `${LCBO_BASE_URL}stores?products=${productIDs(
          action.payload
        )}&lat=43.653&lon=-79.383&access_key=${LCBO_API_KEY}`
      )
    )
    .map(({ response }) => {
      return sendStoresByProductIDs(response.result)
    })
