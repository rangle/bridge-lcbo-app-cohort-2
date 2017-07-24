export const HEADER_ACTIONS = {
	UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT',
}

export const updateSearchText = searchText => ({
	type: HEADER_ACTIONS.UPDATE_SEARCH_TEXT,
	payload: searchText,
})
