export const GET_PRODUCT_RESULTS = "GET_PRODUCT_RESULTS"
export const SEND_PRODUCT_RESULTS = "SEND_PRODUCT_RESULTS"

export const getProductResults = searchString => {
  //goes to the epic
  return {
    type: GET_PRODUCT_RESULTS,
    payload: searchString
  }
}

export const sendProductResults = productsList => {
  return {
    type: SEND_PRODUCT_RESULTS,
    payload: productsList
  }
}


