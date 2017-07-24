import React from 'react'
import './Header.css'
import shopping_cart from '../../img/shopping_cart.svg'
import SearchBar from '../SearchBar'

const Header = props => {
	return (
	  <div className="header">
	    <img src={shopping_cart} className="shopping-cart-logo" alt="open wishlist button" onClick={ () => props.onClickShoppingCartLogo()} />
	    <div className="text-input">
			<SearchBar updateSearchText={props.updateSearchText} searchText={props.searchText} getAlcoholList={props.getResults}/>
		</div>
	  </div>
	)
}

export default Header
