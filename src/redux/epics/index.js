import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { searchProducts } from "./searchProducts.epic"
import { getStoreLocations } from "./getStoreLocations.epic"

export default (...args) =>
  combineEpics(searchProducts, getStoreLocations)(...args, {
    ajax: Observable.ajax
  })
