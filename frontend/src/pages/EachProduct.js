import React from 'react';
import ProductPage from '../components/ProductPage';

const EachProduct = ({productId}) => {
    console.log(productId);
    return <ProductPage product={productId}/>
}

export default EachProduct;
