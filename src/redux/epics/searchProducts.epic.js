import { GET_PRODUCT_RESULTS, sendProductResults } from "../actions"
import { Observable } from "rxjs"
import { LCBO_API_KEY, LCBO_BASE_URL } from "../constants"

export const searchProducts = (action$, _, { ajax }) =>
  action$
    .ofType(GET_PRODUCT_RESULTS)
    .mergeMap(action =>
      ajax(
        `${LCBO_BASE_URL}products?q=${action.payload}&access_key=${LCBO_API_KEY}`
      )
    )
    .map(({ response }) => {
      return sendProductResults(response.result)
    })
