import App from "./App.js"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

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
import { getStoresByProductIDs, setUserLocation, getUserCurrentLocation } from "./redux/actions/storeLocation.actions"

const mapStateToProps = state => {
  return {
    searchString: state.header.searchString,
    wishlistIsVisible: state.wishlistIsVisible,
    wishList: state.product.wishList,
    productList: state.product.productList,
    latLng: state.storesList.latLng
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
      getUserCurrentLocation,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
