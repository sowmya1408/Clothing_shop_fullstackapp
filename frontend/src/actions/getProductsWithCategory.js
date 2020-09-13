import { GET_CATEGORY_PRODUCTS } from "./types";

export const getCategoryProducts = (category, gender) => {
  return  async (dispatch) => {
    try {
      const fetchCategory =  await fetch(`http://localhost:8080/api/products/search?query=${category}`);
      const fetchCategoryJson = await  fetchCategory.json();
      dispatch({
        type: GET_CATEGORY_PRODUCTS,
        categoryProducts: fetchCategoryJson.filter(product => product.gender === gender),
      });
    } catch (err) {
      console.log(err);
    }
  };
};
