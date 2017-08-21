import React from "react"
import "./CartButton.css"
import { CSSTransitionGroup } from "react-transition-group";


const CartButton = props => {
	return (
		<CSSTransitionGroup
			component="div"
			className="cart-wrapper"
			transitionName="cart-wrapper"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={800}
			>
		<span key={props.wishList.length}>
		<div  onClick={() => props.onClick()}>
			{/* className="cart-wrapper" */}

			{(props.wishList && props.wishList.length) > 0
				? <div className="red-badge">
						{props.wishList.length}
					</div>
				: null}

		</div>
		</span>
	</CSSTransitionGroup>
	)
}

export default CartButton
