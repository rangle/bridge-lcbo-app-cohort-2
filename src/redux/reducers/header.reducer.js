import { HEADER_ACTIONS } from '../actions/header.actions'

export default ( state = '', action) => {
	switch (action.type) {
		case HEADER_ACTIONS.UPDATE_SEARCH_TEXT:
			return 	{...state, searchText: action.payload}
		default:
		 	return state
	}
}
