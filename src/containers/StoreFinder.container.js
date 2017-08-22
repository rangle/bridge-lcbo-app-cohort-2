import React, { Component } from "react"
import StoresList from "../components/StoresList"
import LocationMap from "../components/LocationMap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
  getStoresByProductIDs,
  getUserCurrentLocation
} from "../redux/actions/storeLocation.actions"
import {
  closeMapDialog,
  showMapDialog
} from "../redux/actions/mapDialog.actions"

import MapDialog from "../components/MapDialog"
import "./StoreFinder.container.css"

class StoreFinder extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.storeList.length === 0) {
        this.props.showMapDialog()
      }
    }
  }

  render() {
    return (
      <div className="storeFinder-container">
        <MapDialog {...this.props} />
        <StoresList {...this.props} />
        <LocationMap {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    storeList: state.storesList.storeList,
    latLng: state.storesList.latLng,
    mapDialogIsVisible: state.mapDialogIsVisible,
    closeMapDialog: state.closeMapDialog,
    showMapDialog: state.showMapDialog
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getStoresByProductIDs,
      getUserCurrentLocation,
      closeMapDialog,
      showMapDialog
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreFinder)
