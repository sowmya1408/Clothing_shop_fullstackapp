import { GET_PRODUCT_WITH_ID } from "./types";

export const getProductId = (id) => {
  return async (dispatch) => {
    try {
      const fetchIdProduct = await fetch(
        `https://clothinshop-backend.herokuapp.com/api/products/${id}`
      );
      const fetchIdProductJson = await fetchIdProduct.json();
      dispatch({
        type: GET_PRODUCT_WITH_ID,
        productsId: fetchIdProductJson,
        cart: fetchIdProductJson,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
