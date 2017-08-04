import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { searchProducts } from "./searchProducts.epic"

export default (...args) =>
  combineEpics(searchProducts)(...args, { ajax: Observable.ajax })
