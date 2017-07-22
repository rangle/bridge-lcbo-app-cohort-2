import React from 'react';
import Product from '../Product';

const ProductList = props => {
  let products;

  props.productList.length > 0
  ? products = props.productList.map(product => <Product {...product} key={product.id} />)
  : products = <h2>No results.</h2>

    return(
      <ul className="product-list">
        {products}
      </ul>
    );
};

export default ProductList;