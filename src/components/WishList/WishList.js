import React from 'react';
import WishListProduct from '../WishListProduct';

const WishList = props => {
  let wlproducts;

  if (!props.wishList) {
    return null;
  } else {

    wlproducts = props.wishList.length > 0
    ? props.wishList.map(product => <WishListProduct
      key={product.id}
      {...product}
      addToWishList={props.addToWishList}
      removeFromWishList={props.removeFromWishList}
      wishList={props.wishList} />)
    : <h2>No results.</h2>

      return(
        <ul className="product-wishList">
          {wlproducts}
        </ul>
      );
  }
};

export default WishList;