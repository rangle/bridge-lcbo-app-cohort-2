import { WISHLIST_ACTIONS } from '../actions/wishlist.actions'


export const wishlistIsVisible = (state = false, action) => {
  switch(action.type) {
     case WISHLIST_ACTIONS.OPEN_PANEL:
       return true;
     case WISHLIST_ACTIONS.CLOSE_PANEL:
       return false;
     default:
       return state;
   }
};
