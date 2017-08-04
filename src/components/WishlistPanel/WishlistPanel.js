import React from "react"
import { Motion, spring } from "react-motion"
import WishList from "../WishList"
import "./WishlistPanel.css"
import close_button from "../../img/close_button.svg"

const WishlistPanel = props =>
  <Motion style={{ x: spring(props.wishlistIsVisible ? 0 : 130) }}>
    {function({ x }) {
      return (
        <div
          className="wishlist-panel"
          style={{
            transform: "translate3d(" + x + "vw, 0vw, 0)"
          }}
        >
          <img
            src={close_button}
            className="close_button"
            alt="close panel button"
            onClick={() => props.onClickClosePanel()}
          />
          <h2 className="wishlist-header">
            Wishlist ({props.wishList ? props.wishList.length : 0})
          </h2>
          <WishList {...props} />
          <button onClick={() => props.getStoresByProductIDs()}>
            Find stores
          </button>
        </div>
      )
    }}
  </Motion>

export default WishlistPanel
