import React from 'react';
import shopping_cart from '../../img/shopping_cart.svg';

const Header = ({onClickShoppingCartLogo}) => (

  <div className="App-header">
    <img src={shopping_cart} id="shopping-cart-logo" alt="open wishlist button" onClick={ () => onClickShoppingCartLogo()} />
    <div id="text-input">
      <h2>text input and search button will go here</h2>
    </div>
  </div>


);


export default Header;
