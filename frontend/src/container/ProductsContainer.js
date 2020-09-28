import React, { useEffect } from "react";
import ProductsPage from "../pages/ProductsPage";
import { connect } from "react-redux";
import { getProducts } from "../actions/getProducts";
import {addBasket} from '../actions/addAction';
import {useParams} from "react-router-dom";

const ProductsContainer = ({ productState, getProducts, addBasket, basketState }) => {
  let {slug} = useParams();
  const { productsData } = productState;
  const {cartProducts} = basketState;
  console.log(productsData);


  useEffect(() => {
    getProducts();
  }, [slug,getProducts]);


  return <ProductsPage name={slug} products={productsData}  productCart={cartProducts}/>;
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {getProducts, addBasket})(ProductsContainer);
