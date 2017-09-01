import Rx from "rxjs"

import {
  STORE_LOCATION_ACTIONS,
  sendStoresByProductIDs,
  setUserLocation
} from "../actions/storeLocation.actions"
import { LCBO_API_KEY, LCBO_BASE_URL } from "../constants"

const productIDs = (ids = []) => ids.join(",")

export const getStoreLocations = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS)
    .mergeMap(action => {
      return ajax(
        `${LCBO_BASE_URL}stores?products=${productIDs(
          action.payload.ids
        )}&lat=${action.payload.latLng.lat}&lon=${action.payload.latLng
          .lng}&access_key=${LCBO_API_KEY}`
      )
    })
    .map(({ response }) => {
      return sendStoresByProductIDs(response.result)
    })

const getPreciseLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      position
        ? resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        : reject("no value for position")
    })
  })
}

export const getUserCurrentLocation = (action$, _, { ajax }) =>
  action$
    .ofType(STORE_LOCATION_ACTIONS.GET_USER_CURRENT_LOCATION)
    .mergeMap(action => Rx.Observable.fromPromise(getPreciseLocation()))
    .map(({ lat, lng }) => {
      return setUserLocation({ lat, lng })
    })
