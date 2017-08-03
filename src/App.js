import React, { Component } from "react"

import "./App.css"
import "rxjs"

import Header from "./components/Header"
import ProductList from "./components/ProductList"
import WishlistPanel from "./components/WishlistPanel"

const initialState = {
  orders: []
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  render() {
    const {
      wishlistIsVisible,
      onClickClosePanel,
      onClickShoppingCartLogo,
      updateSearchText,
      getResults,
      searchString,
      wishList
    } = this.props
    return (
      <div className="App">
        <Header
          {...this.props}
          onClickShoppingCartLogo={onClickShoppingCartLogo}
          wishList={wishList}
          getResults={getResults}
          updateSearchText={updateSearchText}
          searchString={searchString}
        />
        <WishlistPanel
          {...this.props}
          wishlistIsVisible={wishlistIsVisible}
          onClickClosePanel={onClickClosePanel}
        />
        <ProductList {...this.props} />
      </div>
    )
  }
}

export default App
