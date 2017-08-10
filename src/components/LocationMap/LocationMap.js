import { default as React, Component } from "react"

import { withGoogleMap, GoogleMap } from "react-google-maps"

const SimpleMap = withGoogleMap(props =>
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: 43.6532, lng: 79.3832 }} />
) // Toronto lat/long coordinates

export default class LocationMap extends Component {
	render() {
		return (
			<SimpleMap
				containerElement={
					<div
						style={{
							position: "absolute",
							height: `50%`,
							top: `10em`,
							left: 0,
							right: 0,
							bottom: 0,
							justifyContent: "flex-end",
							alignItems: "center"
						}}
					/>
				}
				mapElement={
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0
						}}
					/>
				}
			/>
		)
	}
}
