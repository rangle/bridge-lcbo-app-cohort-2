import { routerReducer } from 'react-router-redux';
import { wishlistIsVisible } from './wishlist.reducer';

import header from './header.reducer';
import productReducer from './product.reducer';
import combineReducers from 'redux/es/combineReducers';

export default combineReducers({
    routing: routerReducer,
    searchString: header,
    product: productReducer,
    wishlistIsVisible: wishlistIsVisible
});
