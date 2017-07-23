import React from 'react';

const Header = ({onClickShoppingCartLogo}) => (

  <div className="App-header">
    <img src={shopping_cart} id="shopping-cart-logo" onClick={ () => onClickShoppingCartLogo()} />
    <h2>text input will go here?</h2>
  </div>


);


export default Header;
