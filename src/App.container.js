import { connect } from 'react-redux';
import { openWishlistPanel, closeWishlistPanel } from './redux/actions/wishlist.actions';
import { updateSearchText } from './redux/actions/header.actions'
import { getAPIResults } from './redux/actions/index';
import App from './App.js';
import { bindActionCreators } from 'redux'


const mapStateToProps = state => {
  return ({
  wishlistIsVisible: state.wishlistIsVisible,
  searchString: state.searchString,
  products: state.products,
  orders: state.orders,
})
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({
 	onClickShoppingCartLogo: openWishlistPanel,
  	onClickClosePanel: closeWishlistPanel,
  	updateSearchText,
  	getResults: getAPIResults }, dispatch)
}

// const actions = {
//   onClickShoppingCartLogo: openWishlistPanel,
//   onClickClosePanel: closeWishlistPanel,
//   updateSearchText,
//   getResults: getAPIResults, // !!! import from action properly
// }



// export default connect(mapStateToProps, actions)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
