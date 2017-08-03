export const WISHLIST_ACTIONS = {
	OPEN_PANEL: "OPEN_WISHLIST_PANEL",
	CLOSE_PANEL: "CLOSE_WISHLIST_PANEL"
}

export const openWishlistPanel = () => ({
	type: WISHLIST_ACTIONS.OPEN_PANEL,
	payload: ""
})

export const closeWishlistPanel = () => ({
	type: WISHLIST_ACTIONS.CLOSE_PANEL,
	payload: ""
})
