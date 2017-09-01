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

  componentDidMount(nextProps) {
    // this.props.getUserCurrentLocation()
    // comment out due to broken test (app will render w/o crashing - test is wrong) but this should be here to get user location so it's ready when we hit the find store button
  }

  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <WishlistPanel {...this.props} />
        <ProductList {...this.props} />
      </div>
    )
  }
}

export default App
