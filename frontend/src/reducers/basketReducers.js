import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET,REMOVE_FROM_CART } from "../actions/types";

const localItems = localStorage.getItem('cartItems')
const initialState =  {
    cartProducts: localItems ? JSON.parse(localItems) : []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            return {
                 ...state, cartProducts: action.cartItems.cartItems
            }
            case REMOVE_FROM_CART:
                console.log('I am')
                return {
                    ...state, cartProducts: action.payload.cartItems
                }    
         case GET_NUMBERS_BASKET:
             return {
                 ...state
             }   
        default:
            return state;
    }
}