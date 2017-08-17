export const STORE_LOCATION_ACTIONS = {
  GET_STORES_BY_PRODUCT_IDS: "GET_STORES_BY_PRODUCT_IDS",
  SEND_STORES_BY_PRODUCT_IDS: "SEND_STORES_BY_PRODUCT_IDS"
}

export const getStoresByProductIDs = ids => ({
  type: STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS,
  payload: [311787, 109017, 432732]
})

export const sendStoresByProductIDs = storesList => {
  return {
    type: STORE_LOCATION_ACTIONS.SEND_STORES_BY_PRODUCT_IDS,
    payload: storesList
  }
}
