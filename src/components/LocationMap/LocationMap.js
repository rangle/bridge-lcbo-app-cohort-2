import { default as React, Component } from "react"

import { withGoogleMap, GoogleMap } from "react-google-maps"

const simpleMap = withGoogleMap(props =>
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: 43.6532, lng: 79.3832 }} />
) // Toronto lat/long coordinates

export default class LocationMap extends Component {
	render() {
		return (
			<simpleMap
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		)
	}
}
