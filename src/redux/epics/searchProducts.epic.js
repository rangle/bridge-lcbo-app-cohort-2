import { PRODUCT_ACTIONS, sendProductResults } from "../actions/product.actions"
import { LCBO_API_KEY, LCBO_BASE_URL } from "../constants"
import { Observable } from "rxjs"

export const searchProducts = (action$, _, { ajax }) =>
  action$
    .ofType(PRODUCT_ACTIONS.GET_PRODUCT_RESULTS)
    .debounce(action => Observable.timer(action.payload.timeInterval))
    .mergeMap(action =>
      ajax(
        `${LCBO_BASE_URL}products?q=${action.payload
          .searchString}&access_key=${LCBO_API_KEY}`
      )
    )
    .map(({ response }) => {
      return sendProductResults(response.result)
    })
