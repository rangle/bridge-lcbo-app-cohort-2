import React from 'react';
import Product from '../Product';

const WishList = props => {
  let products;

  if (!props.wishList) {
    return null;
  } else {

    products = props.wishList.length > 0
    ? props.wishList.map(product => <Product
      key={product.id}
      {...product}
      addToWishList={props.addToWishList}
      removeFromWishList={props.removeFromWishList}
      wishList={props.wishList} />)
    : <h2>No results.</h2>

      return(
        <ul className="product-wishList">
          {products}
        </ul>
      );
  }
};

export default WishList;