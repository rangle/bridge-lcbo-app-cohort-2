import React from "react"
import "./Header.css"
import cheers from "../../img/cheers.jpg"
import SearchBar from "../SearchBar"
import CartButton from "../CartButton"

// const headerImageStyle = {
//   width: "100%",
//   backgroundImage: `url(${cheers})`,
//   background: "linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.7))",
//   // backgroundImage: `url(${cheers})`,
//   backgroundSize: "cover",
//   overflow: "hidden"
// }

const Header = props => {
  return (
    <div className="header">
      <div className="title">
        <h1>LCBO App Title</h1>
      </div>
      <CartButton
        wishList={props.wishList}
        onClick={() => props.onClickShoppingCartLogo()}
      />
      <div className="header-text-input-group">
        <SearchBar
          updateSearchText={props.updateSearchText}
          searchString={props.searchString}
          getResults={props.getResults}
        />
      </div>
    </div>
  )
}

export default Header
