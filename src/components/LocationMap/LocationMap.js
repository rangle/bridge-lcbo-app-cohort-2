import React from "react"
import { GoogleMap, Marker } from "react-google-maps"
import "./LocationMap.css"

const googleMapURL =
  "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyB0XpkaYuIPOm1NIyUsBeuegTTyaz8vfW4"

// const TOR_LAT_LONG = { lat: 43.6532, lng: 79.3832 }

const LocationMap = props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: 43.6532, lng: 79.3832 }} //Toronto location coordinates
      // Pass the map reference here as props
      googleMapURL={googleMapURL}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker, index) =>
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      )}
    </GoogleMap>
  )
}

export default LocationMap
