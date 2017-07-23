import { connect } from 'react-redux';
import { openWishlistPanel, closeWishlistPanel } from './redux/actions/wishlist.actions';
import App from './App.js';

const mapStateToProps = state => ({
  wishlistIsVisible: state.wishlistIsVisible,
})

const actions = {
  onClickShoppingCartLogo: openWishlistPanel,
  onClickClosePanel: closeWishlistPanel
}

export default connect(mapStateToProps, actions)(App);
