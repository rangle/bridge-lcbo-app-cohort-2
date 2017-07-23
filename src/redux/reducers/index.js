import { routerReducer } from 'react-router-redux'
import { wishlistIsVisible } from './wishlist.reducer';

import combineReducers from 'redux/es/combineReducers';


export default combineReducers({
    routing: routerReducer,
    wishlistIsVisible: wishlistIsVisible
});
