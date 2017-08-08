export const STORE_LOCATION_ACTIONS = {
  GET_STORES_BY_PRODUCT_IDS: "GET_STORES_BY_PRODUCT_IDS",
  SEND_STORES_BY_PRODUCT_IDS: "SEND_STORES_BY_PRODUCT_IDS"
}

export const getStoresByProductIDs = () => ({
  type: STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS,
  payload: [311787]
})

export const sendStoresByProductIDs = storesList => {
  return {
    type: STORE_LOCATION_ACTIONS.SEND_STORES_BY_PRODUCT_IDS,
    payload: storesList
  }
}
