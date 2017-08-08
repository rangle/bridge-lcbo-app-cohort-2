import {
  STORE_LOCATION_ACTIONS,
  sendStoresByProductIDs
} from "../actions/storeLocation.actions"

import { LCBO_API_KEY, LCBO_BASE_URL } from "../constants"

export const getStoreLocations = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS)
    .mergeMap(action =>
      ajax(
        `${LCBO_BASE_URL}stores?product_id=${action
          .payload[0]}&lat=43.659&lon=-79.439&access_key=${LCBO_API_KEY}`
      )
    )
    .map(({ response }) => {
      return sendStoresByProductIDs(response.result)
    })
