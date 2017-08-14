import { default as React, Component } from "react"

import { withGoogleMap, GoogleMap } from "react-google-maps"

const TOR_LAT_LNG = { lat: 43.6532, lng: -79.3832 } // Toronto lat/long coordinates

const SimpleMap = withGoogleMap(props =>
	<GoogleMap
		ref={res => props.onLoad(res)}
		defaultZoom={16}
		defaultCenter={TOR_LAT_LNG}
	/>
)

export default class LocationMap extends Component {
	//this functionality should be moved to an epic:
	// componentDidMount(nextProps) {
	// 	navigator.geolocation.getCurrentPosition(position => {
	// 		const latLng = {
	// 			lat: position.coords.latitude,
	// 			lng: position.coords.longitude
	// 		}

	// 		this.mapLib.panTo(latLng)
	// 	})
	// }

	render() {
		return (
			<SimpleMap
				onLoad={res => (this.mapLib = res)}
				containerElement={
					<div
						style={{
							position: "absolute",
							height: `100%`,
							width: `70%`,
							top: 0,
							left: `30em`,
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
