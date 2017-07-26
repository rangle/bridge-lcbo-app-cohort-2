import { PRODUCT_ACTIONS } from '../actions/product.actions';
import {SEND_API_RESULTS} from '../actions/';
const DEFAULT_STATE = {
  wishList: [],
  productList: [],
};

// if (localStorage.getItem("state") !== null) {
//   //set this to DEFAULT_STATE when we remove fakeProps
//   fakeProps.wishList = JSON.parse(localStorage.getItem("state")).wishList;
// }

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
     case SEND_API_RESULTS:
        return { productList: action.payload }

    case PRODUCT_ACTIONS.ADD_PRODUCT_TO_WISHLIST:
      return {...state,
        wishList: state.wishList.concat(action.payload)
      };

    case PRODUCT_ACTIONS.REMOVE_PRODUCT_FROM_WISHLIST:
      return {...state,
        wishList: state.wishList
        .filter(product => product.id !== action.payload.id)
      };

    default:
      return state;
  }
}