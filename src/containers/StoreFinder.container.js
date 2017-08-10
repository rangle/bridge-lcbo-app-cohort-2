import React from "react"
import StoresList from "../components/StoresList"
import LocationMap from "../components/LocationMap"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getStoresByProductIDs } from "../redux/actions/storeLocation.actions"

const StoreFinder = props =>
	<div>
		<StoresList {...props} />
		<LocationMap {...props} />
	</div>

const mapStateToProps = state => {
	return {
		storeList: state.storesList.storeList
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			getStoresByProductIDs
		},
		dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreFinder)
