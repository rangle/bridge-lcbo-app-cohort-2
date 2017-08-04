import { GET_PRODUCT_RESULTS, sendProductResults } from "../redux/actions"
import { Observable } from "rxjs"

const LCBO_API_KEY =
  "MDo4OTc1NDY4Ni03MDAzLTExZTctOTNkNS04ZmJjMjZkMWQ2NTE6cHFlN3BwUEtzaDJ6aUpidHU4QnZTOU1RODVUSFZVd0RhRUc5"

export const searchProducts = (action$, _, { ajax }) =>
  action$
    .ofType(GET_PRODUCT_RESULTS)
    .mergeMap(action =>
      ajax(
        `http://lcboapi.com/products?q=${action.payload}&access_key=${LCBO_API_KEY}`
      )
    )
    .map(({ response }) => {
      return sendProductResults(response.result)
    })
