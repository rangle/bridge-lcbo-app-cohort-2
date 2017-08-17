import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { searchProducts } from "./searchProducts.epic"
import { getStoreLocations,  getUserCurrentLocation} from "./getStoreLocations.epic"

export default (...args) =>
  combineEpics(searchProducts, getStoreLocations, getUserCurrentLocation)(...args, {
    ajax: Observable.ajax
  })
