import React from 'react';
import './Header.css';
import shopping_cart from '../../img/shopping_cart.svg';


const Header = ({onClickShoppingCartLogo}) => (

  <div className="App-header">
    <img src={shopping_cart} className="shopping-cart-logo" alt="open wishlist button" onClick={ () => onClickShoppingCartLogo()} />
    <div className="text-input">
      <h2>text input and search button will go here</h2>
    </div>
  </div>


);


export default Header;
