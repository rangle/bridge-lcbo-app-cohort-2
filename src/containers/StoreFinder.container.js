import React from "react"
import StoresList from "../components/StoresList"
import LocationMap from "../components/LocationMap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getStoresByProductIDs } from "../redux/actions/storeLocation.actions"
import { Link } from "react-router"
import "./StoreFinder.container.css"

const StoreFinder = props =>
	<div className="storeFinder-container">
		<Link className="link" to="/">
			&larr; go back
		</Link>
		<StoresList {...props} />
		<LocationMap />
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
