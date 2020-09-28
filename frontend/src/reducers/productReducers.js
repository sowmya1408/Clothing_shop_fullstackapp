import { GET_PRODUCTS_DATA, GET_CATEGORY_PRODUCTS,GET_PRODUCT_WITH_ID } from "../actions/types";

const initialState =  {
    productsData: [],
    productCategoryData: [],
  
}
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS_DATA:
            return {
                ...state,
                productsData: action.products
            }
        case GET_CATEGORY_PRODUCTS:
            return {
                ...state,
                productCategoryData: action.categoryProducts
            }
            case GET_PRODUCT_WITH_ID:
                return {
                    ...state,
                    productsWithId: action.productsId,

                }    
        default:
            return state;
    }
}