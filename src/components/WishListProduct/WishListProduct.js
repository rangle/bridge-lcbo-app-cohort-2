import React from 'react';
import './WishListProduct.css';

const WishListProduct = wishListProduct => {
  return <li className="wl-product"
  onClick={() => { wishListProduct.wishList.find(item => item.id === wishListProduct.id)
        ? wishListProduct.removeFromWishList(wishListProduct)
        : wishListProduct.addToWishList(wishListProduct)
      }
    }>
    <img src={wishListProduct.image_thumb_url} alt="" />
    <div className="wl-text-wrapper">
      <h2>{wishListProduct.name}</h2>
      <div>
        <span>${(wishListProduct.price_in_cents / 100).toFixed(2)}</span>
        <span>{wishListProduct.package}</span>
      </div>
      <div id="close_x">
        &times;
      </div>
    </div>
    
  </li>
};

export default WishListProduct;
