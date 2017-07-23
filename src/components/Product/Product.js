import React from 'react';

const Product = product => {
  return <li className="product-wrapper"
  onClick={() => { product.wishList.find(item => item.id === product.id)
        ? product.removeFromWishList(product)
        : product.addToWishList(product)
      }
    }>
    <img src={product.image_thumb_url} alt="" />
    <h2>{product.name}</h2>
    <p>
      { (product.price_in_cents / 100).toFixed(2) }
      <span>{product.package}</span>
    </p>
  </li>
};

export default Product;
