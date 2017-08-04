import { GET_STORES_BY_PRODUCT_IDS } from "../redux/actions"
import { Observable } from "rxjs"

const LCBO_API_KEY =
  "MDo4OTc1NDY4Ni03MDAzLTExZTctOTNkNS04ZmJjMjZkMWQ2NTE6cHFlN3BwUEtzaDJ6aUpidHU4QnZTOU1RODVUSFZVd0RhRUc5"

export const getStoreLocations = (action$, _, { ajax }) =>
  action$
    .ofType(GET_STORES_BY_PRODUCT_IDS)
    .mergeMap(action =>
      ajax(
        `http://lcboapi.com/stores?product_id=${action
          .payload[0]}&lat=43.659&lon=-79.439&access_key=${LCBO_API_KEY}`
      )
    )
    .map(({ response }) => {
      console.log(response.result)
      // return sendProductResults(response.result)
    })
