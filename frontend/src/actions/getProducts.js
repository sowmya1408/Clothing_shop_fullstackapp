import { GET_PRODUCTS_DATA,OPEN_EACH_PRODUCT,ADD_PRODUCT_BASKET } from "./types";

export const loadProducts = () => {
  return (dispatch) => {
    return fetch('http://localhost:8080/api/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch(getProducts(data));
      });
  };
};

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS_DATA,
        products: products
    }
}

 

export const openEachProduct = (id) => {
    return (dispatch) => {
    return fetch(`http://localhost:8080/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getProducts(data));
      });
    }
}

export const getEachProducts = (oneProduct) => {
    return {
        type: OPEN_EACH_PRODUCT,
        product: oneProduct
    }
}

export const addProductToBasket = () => {
    return (dispatch) => {
        console.log("adding to basket")
        dispatch({
            type: ADD_PRODUCT_BASKET
        })
    }
}
