import { connect } from 'react-redux';
import { openWishlistPanel, closeWishlistPanel } from './redux/actions/wishlist.actions';
import { getAPIResults } from './redux/actions/index';
import App from './App.js';

const mapStateToProps = state => ({
  wishlistIsVisible: state.wishlistIsVisible,
  searchString: state.searchString,
  products: state.products,
  orders: state.orders,
})

const actions = {
  onClickShoppingCartLogo: openWishlistPanel,
  onClickClosePanel: closeWishlistPanel,
  // onTextInputChange: inputChange, //@alex feel free to uncomment and use this line ; )
  getResults: getAPIResults, // !!! import from action properly
}



export default connect(mapStateToProps, actions)(App);
