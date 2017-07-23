import React, { Component } from 'react';


import './App.css';
import 'rxjs';

import Header from './components/Header';
import ProductList from './components/ProductList';
import WishlistPanel from './components/WishlistPanel';

const intialState = {
  searchString: '',
  products: [],
  orders: [],
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = intialState
  }

  render() {
    const { wishlistIsVisible, onClickClosePanel, onClickShoppingCartLogo,  getResults} = this.props;

    return (
      <div className="App">
        <button onClick={ () => getResults() // TODO: use searchString when that exists
        }>Get Sample Data</button>
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


export default App;
