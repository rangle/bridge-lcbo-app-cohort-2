import { connect } from 'react-redux'
import { openWishlistPanel, closeWishlistPanel } from './redux/actions/wishlist.actions'
import { updateSearchText, getAlcoholList } from './redux/actions/header.actions'
import App from './App.js'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  wishlistIsVisible: state.wishlistIsVisible,
  searchText: state.header.searchText,
  alcohol: state.header.searchText
})

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({ 
 	onClickShoppingCartLogo: openWishlistPanel,
  	onClickClosePanel: closeWishlistPanel,
  	updateSearchText, 
  	getAlcoholList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
