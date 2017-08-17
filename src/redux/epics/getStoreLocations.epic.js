import {
  STORE_LOCATION_ACTIONS,
  sendStoresByProductIDs,
  setUserLocation,
} from "../actions/storeLocation.actions";

import { LCBO_API_KEY, LCBO_BASE_URL } from "../constants";

export const getStoreLocations = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS)
    .mergeMap(action =>
      ajax(
        `${LCBO_BASE_URL}stores?product_id=${action
          .payload[0]}&lat=43.659&lon=-79.439&access_key=${LCBO_API_KEY}`,
      ),
    )
    .map(({ response }) => {
      return sendStoresByProductIDs(response.result);
    });


function getPreciseLocation() {
      return new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(function (position) {
    resolve([position.coords.latitude, position.coords.longitude]);
  });
});
}


export const getUserCurrentLocation = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_USER_CURRENT_LOCATION)
    .do(action => {

      getPreciseLocation()
    //     navigator.geolocation.getCurrentPosition(position => {
    //     ({
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     });
    //   });
    })
    .map(({ lat, lng }) => {
      return setUserLocation({ lat, lng });
    });



// code dump for copy pasta
// 	navigator.geolocation.getCurrentPosition(position => {
// 		const latLng = {
// 			lat: position.coords.latitude,
// 			lng: position.coords.longitude
// 		}

// 		this.mapLib.panTo(latLng)
// 	})
