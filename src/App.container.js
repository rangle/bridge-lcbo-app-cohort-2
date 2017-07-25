import App from './App.js';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { openWishlistPanel, closeWishlistPanel } from './redux/actions/wishlist.actions';
import { addProductToWishList, removeProductFromWishList } from './redux/actions/product.actions';
import { updateSearchText } from './redux/actions/header.actions';
import { getAPIResults } from './redux/actions/index';

const mapStateToProps = state => {
  return ({
  searchString: state.searchString,
  wishlistIsVisible: state.wishlistIsVisible,
  wishList: state.product.wishList,
  productList: state.product.productList,
  orders: state.orders,
})
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({
  onClickShoppingCartLogo: openWishlistPanel,
  onClickClosePanel: closeWishlistPanel,
  updateSearchText,
  addToWishList: addProductToWishList,
  removeFromWishList: removeProductFromWishList,
  getResults: getAPIResults
}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
