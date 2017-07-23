import { PRODUCT_ACTIONS } from '../actions/product.actions';

// const DEFAULT_STATE = {
//   wishList: [],
//   productList: [],
// };

const fakeProps = {
  wishList: [],
  productList: [
  {
    name: 'item 1',
    price_in_cents: 374,
    image_thumb_url: 'http://placekitten.com/g/80/120',
    id: 1,
  },
  {
    name: 'item 2',
    price_in_cents: 800,
    image_thumb_url: 'http://placekitten.com/g/80/120',
    id: 2,
  },
  ],
}

// if (localStorage.getItem("state") !== null) {
//   //set this to DEFAULT_STATE when we remove fakeProps
//   fakeProps.wishList = JSON.parse(localStorage.getItem("state")).wishList;
// }

export default (state = fakeProps, action) => {
  switch(action.type) {

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