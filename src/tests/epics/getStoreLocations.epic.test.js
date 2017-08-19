import { ActionsObservable } from "redux-observable"
import "rxjs"
import { Observable } from "rxjs/Observable"
import "rxjs/add/observable/of"

import { getStoreLocations } from "../../redux/epics/getStoreLocations.epic"
import {
  getStoresByProductIDs,
  STORE_LOCATION_ACTIONS
} from "../../redux/actions/storeLocation.actions"

// this creates an action observable, allowing us to fake an action that our epic can hear
const action$ = ActionsObservable.of(getStoresByProductIDs({ids:[1, 2, 3], latLng: {lat: 0, lng: 0}}))

describe("getStoreLocations Epic", () => {
  it("dispatches the correct action when it is successful", done => {
    const ajax = () =>
      Observable.of({
        response: {
          result: [{ name: "store 1", id: 5 }, { name: "store 2", id: 9056 }]
        }
      })

    getStoreLocations(action$, null, { ajax }).subscribe(result => {
      expect(result.type).toBe(
        STORE_LOCATION_ACTIONS.SEND_STORES_BY_PRODUCT_IDS
      )
      expect(result.payload).toEqual([
        { name: "store 1", id: 5 },
        { name: "store 2", id: 9056 }
      ])

      done()
    })
  })
})
