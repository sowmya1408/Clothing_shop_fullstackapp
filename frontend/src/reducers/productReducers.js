import { GET_PRODUCTS_DATA, OPEN_EACH_PRODUCT } from "../actions/types";

const initialState =  {
    productsData: []
}
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS_DATA:
            return {
                productsData: action.products
            }
         case OPEN_EACH_PRODUCT:
             return {
                productsData: action.product
             }   
        default:
            return state;
    }
}