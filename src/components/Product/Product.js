import React from 'react';

const Product = props => (
  <li className="product-wrapper">
    <img src={props.image_thumb_url} alt="" />
    <h2>{props.name}</h2>
    <p>
      { (props.price_in_cents / 100).toFixed(2) }
      <span>{props.package}</span>
    </p>
  </li>
);

export default Product;