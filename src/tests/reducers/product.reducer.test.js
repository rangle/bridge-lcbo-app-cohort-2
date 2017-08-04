import {
  productReducer,
  DEFAULT_STATE
} from "../../redux/reducers/product.reducer"
import {
  addProductToWishList,
  removeProductFromWishList
} from "../../redux/actions/product.actions"
import { sendProductResults } from "../../redux/actions"

describe("Product Reducer", () => {
  let productReducerState = productReducer(DEFAULT_STATE, {
    type: "foo",
    payload: ""
  })
  beforeEach(() => {
    productReducerState = DEFAULT_STATE
  })
  it("should have an initial state with some values set", () => {
    expect(productReducerState).toBeTruthy()
    expect(productReducerState.wishList).toEqual([])
    expect(productReducerState.productList).toEqual([])
  })

  it("should add to the wishList", () => {
    expect(productReducerState.wishList).toEqual([])

    productReducerState = productReducer(
      productReducerState,
      addProductToWishList("socks")
    )
    expect(productReducerState.wishList[0]).toBe("socks")
  })

  it("should remove from the wishList", () => {
    expect(productReducerState.wishList).toEqual([])

    productReducerState.wishList.push({ id: 1 })
    productReducerState = productReducer(
      productReducerState,
      removeProductFromWishList({ id: 1 })
    )

    expect(productReducerState.wishList).toEqual([])
  })

  it("should update the productList when available", () => {
    expect(productReducerState.productList).toEqual([])

    productReducerState = productReducer(
      productReducerState,
      sendProductResults(["socks", "mocks"])
    )

    expect(productReducerState.productList).toEqual(["socks", "mocks"])
  })
})
