import Rx from 'rxjs';

import {
  STORE_LOCATION_ACTIONS,
  sendStoresByProductIDs,
  setUserLocation,
} from "../actions/storeLocation.actions";

import { LCBO_API_KEY, LCBO_BASE_URL } from "../constants";

const productIDs = ids => ids.join(",")

export const getStoreLocations = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS)
    .mergeMap(action => {
      console.log(15, `${LCBO_BASE_URL}stores?product_id=${action
        .payload.id}&lat=${action
          .payload.latLng.lat}&lon=${action
            .payload.latLng.lng}&access_key=${LCBO_API_KEY}`)

      return ajax(
        `${LCBO_BASE_URL}stores?product_id=${action
          .payload.id}&lat=${action
            .payload.latLng.lat}&lon=${action
              .payload.latLng.lng}&access_key=${LCBO_API_KEY}`,
      )
    }
    )
    .map(({ response }) => {
      return sendStoresByProductIDs(response.result);
    });


function getPreciseLocation() {
      return new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(function (position) {
    resolve({lat:position.coords.latitude, lng: position.coords.longitude});
  });
});
}


export const getUserCurrentLocation = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_USER_CURRENT_LOCATION)
    .mergeMap(action =>
          Rx.Observable.fromPromise(getPreciseLocation())
  ).map(({ lat, lng }) => {
      return setUserLocation({ lat, lng });
    });
