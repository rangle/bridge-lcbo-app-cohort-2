import { routerReducer } from 'react-router-redux';
import { wishlistIsVisible } from './wishlist.reducer';
import {SEND_API_RESULTS} from '../actions/';

import header from './header.reducer';
import productReducer from './product.reducer';
import combineReducers from 'redux/es/combineReducers';

export const productsReducer = (state = [], action) => {
  switch(action.type) {
     case SEND_API_RESULTS:
       return action.payload;
     default:
       return state;
   }
};

export default combineReducers({
    routing: routerReducer,
    searchString: header,
    header: header,
    product: productReducer,
    wishlistIsVisible: wishlistIsVisible
});