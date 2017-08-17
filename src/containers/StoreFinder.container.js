import React from "react"
import StoresList from "../components/StoresList"
import LocationMap from "../components/LocationMap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getStoresByProductIDs, getUserCurrentLocation } from "../redux/actions/storeLocation.actions"
import { Link } from "react-router"
import "./StoreFinder.container.css"

const StoreFinder = props => {
  return (<div className="storeFinder-container">
    <Link className="link" to="/">
      &larr; go back
    </Link>
    <StoresList {...props} />
    <LocationMap {...props} />
  </div>)
}

const mapStateToProps = state => {
  return {
    storeList: state.storesList.storeList,
    latLng: state.storesList.latLng
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getStoresByProductIDs,
      getUserCurrentLocation,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreFinder)
