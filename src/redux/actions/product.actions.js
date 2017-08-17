export const PRODUCT_ACTIONS = {
  //user actions
  ADD_PRODUCT_TO_WISHLIST: "ADD_PRODUCT_TO_WISHLIST",
  REMOVE_PRODUCT_FROM_WISHLIST: "REMOVE_PRODUCT_FROM_WISHLIST",
  GET_PRODUCT_RESULTS: "GET_PRODUCT_RESULTS",
  SEND_PRODUCT_RESULTS: "SEND_PRODUCT_RESULTS"
}

export const addProductToWishList = product => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_TO_WISHLIST,
  payload: product
})

export const removeProductFromWishList = product => ({
  type: PRODUCT_ACTIONS.REMOVE_PRODUCT_FROM_WISHLIST,
  payload: product
})

export const getProductResults = (searchString, timeInterval) => {
  return {
    type: PRODUCT_ACTIONS.GET_PRODUCT_RESULTS,
    payload: { searchString, timeInterval }
  }
}

export const sendProductResults = productsList => {
  return {
    type: PRODUCT_ACTIONS.SEND_PRODUCT_RESULTS,
    payload: productsList
  }
}
