import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'rxjs';

import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ProductList {...fakeProps} />
      </div>
    );
  }
}

export default App;

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