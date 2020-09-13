import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getCategoryProducts } from "../actions/getProductsWithCategory";
import {useParams} from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';

const ProductsCategoryContainer = ({getCategoryProducts, productState}) => {
    const {CategorySlug, genderSlug} = useParams();
    console.log(CategorySlug);
    console.log(genderSlug);
    const {productCategoryData} =  productState;
    console.log(productCategoryData);

    useEffect(() => {
        getCategoryProducts(CategorySlug, genderSlug);
    }, [CategorySlug,getCategoryProducts]);
  
    return <CategoryPage productCategory={productCategoryData}/>
  };
  const mapStateToProps = (state) => {
    return state;
  };
  
  export default connect(mapStateToProps, {getCategoryProducts})(ProductsCategoryContainer);
  
