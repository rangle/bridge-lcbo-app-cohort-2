import { HEADER_ACTIONS } from '../actions/header.actions'

export default ( state = '', action) => {
	switch (action.type) {
		case HEADER_ACTIONS.UPDATE_SEARCH_TEXT:
			return action.payload
		default:
		 	return state
	}
}
