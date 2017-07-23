import React, { Component } from 'react';

import './App.css';
import 'rxjs';

import Header from './components/Header';
import ProductList from './components/ProductList';
import WishlistPanel from './components/WishlistPanel';

const initialState = {
  searchString: '',
  products: [],
  orders: [],
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = initialState
  }

  render() {
    const { wishlistIsVisible,
            onClickClosePanel,
            onClickShoppingCartLogo,
            updateSearchText,
            getAlcoholList,
            searchText,
            products,
            getResults,
            searchString } = this.props;
    return (
      <div className="App">
        <Header onClickShoppingCartLogo={onClickShoppingCartLogo} getAlcoholList={getAlcoholList} updateSearchText={updateSearchText} searchText={searchText}/>
        <WishlistPanel {...this.props} wishlistIsVisible={wishlistIsVisible} onClickClosePanel={onClickClosePanel} />
        <ProductList {...this.props} />
      </div>
    );
  }
}

export default App;
