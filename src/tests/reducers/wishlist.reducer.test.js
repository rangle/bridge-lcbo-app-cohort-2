import { wishlistIsVisible } from "../../redux/reducers/wishlist.reducer"
import { WISHLIST_ACTIONS } from "../../redux/actions/wishlist.actions"

describe("wishlist panel reducer", () => {
  let wishlistReducerState = wishlistIsVisible(false, {
    type: "foo",
    payload: ""
  })

  it("should have an initial state of false", () => {
    expect(wishlistReducerState).toBeFalsy()
  })

  it("should be false when the panel is closed", () => {
    expect(wishlistReducerState).toBe(false)

    wishlistReducerState = wishlistIsVisible(wishlistReducerState, {
      type: WISHLIST_ACTIONS.CLOSE_PANEL,
      payload: ""
    })
    expect(wishlistReducerState).toBe(false)
  })

  it("should be true when the panel is open", () => {
    expect(wishlistReducerState).toBe(false)
    wishlistReducerState = wishlistIsVisible(wishlistReducerState, {
      type: WISHLIST_ACTIONS.OPEN_PANEL,
      payload: ""
    })
    expect(wishlistReducerState).toBe(true)
  })
})
