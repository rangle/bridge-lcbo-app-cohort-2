export const STORE_LOCATION_ACTIONS = {
  GET_STORES_BY_PRODUCT_IDS: "GET_STORES_BY_PRODUCT_IDS"
}

export const getStoresByProductIDs = () => ({
  type: STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS,
  payload: ["311787"]
})
