import { PRODUCT_ACTIONS } from "../actions/product.actions"
export const DEFAULT_STATE = {
  wishList: [],
  productList: []
}

export const productReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.SEND_PRODUCT_RESULTS:
      return {
        ...state,
        productList: action.payload
      }

    case PRODUCT_ACTIONS.ADD_PRODUCT_TO_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.concat(action.payload)
      }

    case PRODUCT_ACTIONS.REMOVE_PRODUCT_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter(
          product => product.id !== action.payload.id
        )
      }

    default:
      return state
  }
}

export default productReducer
