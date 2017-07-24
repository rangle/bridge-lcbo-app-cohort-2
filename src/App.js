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
            products,
            getResults,
            searchString } = this.props;

    return (
      <div className="App">
        <Header onClickShoppingCartLogo={onClickShoppingCartLogo} getResults={getResults} updateSearchText={updateSearchText} searchString={searchString}/>
        <WishlistPanel fakeProps={fakeProps} wishlistIsVisible={wishlistIsVisible} onClickClosePanel={onClickClosePanel}/>
        <ProductList productList={products} />
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


export default App;
