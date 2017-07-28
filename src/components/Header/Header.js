import React from 'react'
import './Header.css'
import shopping_cart from '../../img/shopping_cart.svg'
import cheers from '../../img/cheers.jpg'
import SearchBar from '../SearchBar'

const headerImageStyle = {
	width: "100%",
  backgroundImage: ` url(${cheers}) `,
  backgroundSize: 'cover',
  overflow: 'hidden'
}

const Header = props => {
	return (
	  <div className="header" style={ headerImageStyle }>
	    <img src={shopping_cart} className="shopping-cart-logo" alt="open wishlist button" onClick={ () => props.onClickShoppingCartLogo()} />
	    <div className="header-text-input-group">
			<SearchBar updateSearchText={props.updateSearchText} searchString={props.searchString} getResults={props.getResults}/>
		</div>
	  </div>
	)
}

export default Header
