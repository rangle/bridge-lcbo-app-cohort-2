import { routerReducer } from 'react-router-redux'
import { wishlistIsVisible } from './wishlist.reducer';
import header from './header.reducer';


import combineReducers from 'redux/es/combineReducers';

import {SEND_API_RESULTS} from '../actions/'


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
    products: productsReducer,
    searchString: header,
    wishlistIsVisible: wishlistIsVisible
});
