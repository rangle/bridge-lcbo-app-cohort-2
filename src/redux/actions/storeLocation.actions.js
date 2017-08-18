export const STORE_LOCATION_ACTIONS = {
  GET_STORES_BY_PRODUCT_IDS: "GET_STORES_BY_PRODUCT_IDS",
  SEND_STORES_BY_PRODUCT_IDS: "SEND_STORES_BY_PRODUCT_IDS",
  GET_USER_CURRENT_LOCATION: "GET_USER_CURRENT_LOCATION",
  SET_USER_CURRENT_LOCATION: "SET_USER_CURRENT_LOCATION",
};

export const getStoresByProductIDs = (payload) => {
  return {
    type: STORE_LOCATION_ACTIONS.GET_STORES_BY_PRODUCT_IDS,
    payload: payload,
  };
};

export const sendStoresByProductIDs = storesList => {
  return {
    type: STORE_LOCATION_ACTIONS.SEND_STORES_BY_PRODUCT_IDS,
    payload: storesList,
  };
};

export const getUserCurrentLocation = () => ({
  type: STORE_LOCATION_ACTIONS.GET_USER_CURRENT_LOCATION,
});

export const setUserLocation = payload => {
  console.log("payload", payload);
  return {
    type: STORE_LOCATION_ACTIONS.SET_USER_CURRENT_LOCATION,
    payload: payload,
  };
};
