import {
  headerReducer,
  DEFAULT_STATE
} from "../../redux/reducers/header.reducer"
import {
  HEADER_ACTIONS,
  updateSearchText
} from "../../redux/actions/header.actions"

describe("header Reducer", () => {
  let headerReducerState = headerReducer(DEFAULT_STATE, {
    type: "",
    payload: ""
  })
  beforeEach(() => {
    headerReducerState = DEFAULT_STATE
  })

  it("should have an initial state with some values set", () => {
    expect(headerReducerState).toBeTruthy()
    expect(headerReducerState.searchString).toBe("")
  })

  it("should update the search string when available", () => {
    expect(headerReducerState.searchString).toBe("")
    headerReducerState = headerReducer(
      headerReducerState,
      updateSearchText("tequila")
    )
    expect(headerReducerState.searchString).toBe("tequila")
  })
})
