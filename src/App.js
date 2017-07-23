import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openWishlistPanel, closeWishlistPanel } from './redux/actions/wishlist.actions';
import './App.css';
import 'rxjs';

import Header from './components/Header';
import ProductList from './components/ProductList';
import WishlistPanel from './components/WishlistPanel';

class App extends Component {
  render() {
    const { wishlistIsVisible, onClickClosePanel, onClickShoppingCartLogo } = this.props;

    return (
      <div className="App">
        <Header onClickShoppingCartLogo={onClickShoppingCartLogo}/>
        <WishlistPanel fakeProps={fakeProps} wishlistIsVisible={wishlistIsVisible} onClickClosePanel={onClickClosePanel}/>
        <ProductList {...fakeProps} />
      </div>
    );
  }
}


//fake props for rendering
//should be deleted once we integrate list component with redux store
const fakeProps = {
  productList: [{
    name: 'tester',
    price_in_cents: 374,
    package: 'test',
    image_thumb_url: 'test.com',
    id: 12,
  }],
}

const mapStateToProps = state => ({
  wishlistIsVisible: state.wishlistIsVisible,
})

const actions = {
  onClickShoppingCartLogo: openWishlistPanel,
  onClickClosePanel: closeWishlistPanel
}

export default connect(mapStateToProps, actions)(App);
