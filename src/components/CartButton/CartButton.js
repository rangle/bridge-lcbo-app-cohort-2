import React from "react"
import "./CartButton.css"
import { CSSTransitionGroup } from "react-transition-group"

const CartButton = props => {
  return (
    <CSSTransitionGroup
      component="div"
      className="cart-wrapper"
      transitionName="cart-wrapper"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={800}
      onClick={() => props.onClick()}
    >
      <span key={(props.wishList && props.wishList.length) || 0}>
        <div>
          {(props.wishList && props.wishList.length) > 0
            ? <div className="red-badge">
                {props.wishList.length}
              </div>
            : null}
        </div>
      </span>
    </CSSTransitionGroup>
  );
};

export default CartButton
