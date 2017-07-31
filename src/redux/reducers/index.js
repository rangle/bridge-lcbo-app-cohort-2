import { routerReducer } from "react-router-redux"
import { wishlistIsVisible } from "./wishlist.reducer"

import headerReducer from "./header.reducer"
import productReducer from "./product.reducer"
import combineReducers from "redux/es/combineReducers"

export default combineReducers({
  routing: routerReducer,
  header: headerReducer,
  product: productReducer,
  wishlistIsVisible: wishlistIsVisible
})
