import React from 'react'
import shopping_cart from '../../img/shopping_cart.svg'
import './CartButton.css'

const cartImageStyle = {
	width: "40px",
	height: "40px",
  backgroundImage: `url(${shopping_cart})`,
  backgroundSize: 'cover',
}

const CartButton = props  => {
	return (
		<div className="cart-wrapper" style={cartImageStyle} onClick={() => props.onClick()} >
		{(props.wishList && props.wishList.length) > 0 ?
			<div className="red-badge">{props.wishList.length}</div>
			: null}
		</div>
	)
}

export default CartButton