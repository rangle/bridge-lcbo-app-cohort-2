import { HEADER_ACTIONS } from "../actions/header.actions"

export const DEFAULT_STATE = {
  searchString: ""
}

export const headerReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case HEADER_ACTIONS.UPDATE_SEARCH_TEXT:
      return { ...state, searchString: action.payload }
    default:
      return state
  }
}

export default headerReducer
