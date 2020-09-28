import React from 'react';
import ProductPage from '../components/ProductPage';

const EachProduct = ({productId, clickEvent, addToCartProduct, removeEvent}) => {
    console.log(addToCartProduct);
    return <ProductPage product={productId} cartEvent={clickEvent} removeCart = {removeEvent} addToCartProduct={addToCartProduct}/>
}

export default EachProduct;
