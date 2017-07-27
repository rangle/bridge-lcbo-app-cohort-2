import React from 'react';
import './Product.css';

const Product = product => {
  return <li className="product"
  onClick={() => { product.wishList.find(item => item.id === product.id)
        ? product.removeFromWishList(product)
        : product.addToWishList(product)
      }
    }>
    <img src={product.image_thumb_url} alt="" />
    <div className="text-wrapper">
      <h2>{product.name}</h2>
      <div>
        <span>${(product.price_in_cents / 100).toFixed(2)}</span>
        <span>{product.package}</span>
      </div>
    </div>
  </li>
};

export default Product;
