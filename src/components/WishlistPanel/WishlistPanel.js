import React from 'react';
import {Motion, spring} from 'react-motion';
import ProductList from '../ProductList';
import close_button from '../../img/close_button.svg';


const WishlistPanel = ({wishlistIsVisible, onClickClosePanel, fakeProps}) => (

  <Motion style={{x: spring(wishlistIsVisible ? 0 : 130)}}>

  {
     function({x}) {
       return (

        <div id="flyoutPanel" style={{
                transform: "translate3d(" + x + "vw, 0vw, 0)"
              }}>
          <img src={close_button} id="close_button" alt="close panel button" onClick={ () => onClickClosePanel()} />
          <h2 id="wishlist-header">Wishlist ({fakeProps.productList.length})</h2>
          <ProductList {...fakeProps} />
          <button>Find stores</button>
        </div>

      );
    }
  }

  </Motion>
)



export default WishlistPanel;
