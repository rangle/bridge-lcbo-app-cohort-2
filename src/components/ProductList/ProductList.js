import React from 'react';
import Product from '../Product';

import './ProductList.css';

const ProductList = props => {
  let products;

    if (!props.productList) {
      return null;
    } else {
    products = props.productList.length > 0
    ? props.productList.map(product => <Product
      key={product.id}
      {...product}
      addToWishList={props.addToWishList}
      removeFromWishList={props.removeFromWishList}
      wishList={props.wishList} />)
    : <h2>No results.</h2>

      return(
        <ul className="product-list">
          {products}
        </ul>
      );
    }
};

export default ProductList;
