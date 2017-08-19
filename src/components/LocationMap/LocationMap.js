import { default as React, Component } from "react";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const TOR_LAT_LNG = { lat: 43.6532, lng: -79.3832 }; // Toronto lat/long coordinates

const SimpleMap = withGoogleMap(props =>
  <GoogleMap ref={res => props.onLoad(res)} defaultZoom={14} defaultCenter={TOR_LAT_LNG}>
    {props.stores.length > 0 &&
      props.stores.map(store =>
        <Marker position={{ lat: store.latitude, lng: store.longitude }} key={store.id} />,
      )}
  </GoogleMap>,
);

export default class LocationMap extends Component {
  componentDidMount(nextProps) {
    this.props.getUserCurrentLocation();
  }

  componentWillReceiveProps() {
    this.mapLib && this.props.latLng && this.mapLib.panTo(this.props.latLng);
  }

  render() {
    return (
      <SimpleMap
        stores={this.props.storeList}
        onLoad={res => (this.mapLib = res)}
        latLng={this.props.latLng}
        getUserCurrentLocation={this.props.getUserCurrentLocation}
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
              alignItems: "center",
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
              bottom: 0,
            }}
          />
        }
      />
    );
  }
}
