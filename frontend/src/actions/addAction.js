import {ADD_PRODUCT_BASKET,REMOVE_FROM_CART} from './types';

export const addBasket = (product,cartProduct) => (dispatch) => {
    const cartItems = cartProduct.slice();
    let productAlreadyInCart = false;
    const basketProduct = product[0]
    cartItems.forEach((cart) => {
      if (cart.id === basketProduct.id) {
        cart.count += 1;
        productAlreadyInCart = true;
      }
    });
  
    if (!productAlreadyInCart) {
      cartItems.push({ ...basketProduct, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: ADD_PRODUCT_BASKET , cartItems: { cartItems } });
  };

  export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product);
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  };
  
    
