import React, { useEffect } from "react";
import ProductsPage from "../pages/ProductsPage";
import { connect } from "react-redux";
import { getProducts } from "../actions/getProducts";
import {useParams} from "react-router-dom";

const ProductsContainer = ({ productState, getProducts }) => {
  let {slug} = useParams();
  const { productsData } = productState;


  useEffect(() => {
    getProducts();
  }, [slug,getProducts]);

  
  return <ProductsPage name={slug} products={productsData} />;
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {getProducts})(ProductsContainer);
