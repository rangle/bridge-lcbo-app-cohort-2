import App from "./App.js"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import getUserLocation from './utils/getUserLocation'

import {
  openWishlistPanel,
  closeWishlistPanel
} from "./redux/actions/wishlist.actions"
import {
  addProductToWishList,
  removeProductFromWishList
} from "./redux/actions/product.actions"
import { updateSearchText } from "./redux/actions/header.actions"
import { getProductResults } from "./redux/actions/product.actions"
import { getStoresByProductIDs, setUserLocation } from "./redux/actions/storeLocation.actions"

const mapStateToProps = state => {
  console.log(19, state)
  return {
    searchString: state.header.searchString,
    wishlistIsVisible: state.wishlistIsVisible,
    wishList: state.product.wishList,
    productList: state.product.productList
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onClickShoppingCartLogo: openWishlistPanel,
      onClickClosePanel: closeWishlistPanel,
      updateSearchText,
      addToWishList: addProductToWishList,
      removeFromWishList: removeProductFromWishList,
      getResults: getProductResults,
      getStoresByProductIDs,
      setUserLocation,
    },
    dispatch
  )
}

console.log(getUserLocation())
// const test = async () => await getUserLocation()
//
// const test1 = test();

// console.log(test1);

export default connect(mapStateToProps, mapDispatchToProps)(App)
