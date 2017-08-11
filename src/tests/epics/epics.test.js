import { ActionsObservable } from "redux-observable"
import "rxjs"
import { Observable } from "rxjs/Observable"
import "rxjs/add/observable/of"

import { searchProducts } from "../../redux/epics/searchProducts.epic"
import {
  getProductResults,
  PRODUCT_ACTIONS
} from "../../redux/actions/product.actions"

// this creates an action observable, allowing us to fake an action that our epic can hear
const action$ = ActionsObservable.of(getProductResults("socks"))

describe("getProductResults Epic", () => {
  it("dispatches the correct action when it is successful", done => {
    const ajax = () =>
      Observable.of({
        response: {
          result: ["socks", "mocks"]
        }
      }) // this will be replacing our ajax call!

    searchProducts(action$, null, { ajax }).subscribe(result => {
      expect(result.type).toBe(PRODUCT_ACTIONS.SEND_PRODUCT_RESULTS)
      expect(result.payload).toEqual(["socks", "mocks"])

      done()
    })
  })
})
