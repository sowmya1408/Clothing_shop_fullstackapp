import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProductId } from "../actions/getProductWithId";
import { addBasket, removeFromCart } from "../actions/addAction";
import EachProduct from "../pages/EachProduct";
import { useParams } from "react-router-dom";

const ProductWithId = ({ getProductId, productState, addBasket,basketState, removeFromCart }) => {
  const { idSlug } = useParams();
  const { productsWithId } = productState;
  const {cartProducts} = basketState;
  console.log(cartProducts);

  const handleAddToCart = () => {
    addBasket(productsWithId, cartProducts);
  };

  const handleRemoveFromCart = (productsId) => {
    removeFromCart(cartProducts,productsId);
  }
  useEffect(() => {
    getProductId(idSlug);
  }, [idSlug, getProductId]);

  return <EachProduct productId={productsWithId} clickEvent={handleAddToCart} removeEvent = {handleRemoveFromCart} addToCartProduct={cartProducts}/>
  
         
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getProductId, addBasket, removeFromCart })(
  ProductWithId
);
