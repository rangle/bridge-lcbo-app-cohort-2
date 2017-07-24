export const PRODUCT_ACTIONS = {
  //user actions
  ADD_PRODUCT_TO_WISHLIST: 'ADD_PRODUCT_TO_WISHLIST',
  REMOVE_PRODUCT_FROM_WISHLIST: 'REMOVE_PRODUCT_FROM_WISHLIST',
};

export const addProductToWishList = product => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_TO_WISHLIST,
  payload: product
});

export const removeProductFromWishList = product => ({
  type: PRODUCT_ACTIONS.REMOVE_PRODUCT_FROM_WISHLIST,
  payload: product
});


