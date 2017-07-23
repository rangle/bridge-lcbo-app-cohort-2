import { routerReducer } from 'react-router-redux'
import { wishlistIsVisible } from './wishlist.reducer';

import combineReducers from 'redux/es/combineReducers'
import headerReducer from './header.reducer'

export default combineReducers({
    routing: routerReducer,
    wishlistIsVisible: wishlistIsVisible,
    header: headerReducer,
})
