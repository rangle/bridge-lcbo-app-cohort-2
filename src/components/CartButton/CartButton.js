import React from "react"
import "./CartButton.css"

const CartButton = props => {
	return (
		<div className="cart-wrapper" onClick={() => props.onClick()}>
			{(props.wishList && props.wishList.length) > 0
				? <div className="red-badge">
						{props.wishList.length}
					</div>
				: null}
		</div>
	)
}

export default CartButton
