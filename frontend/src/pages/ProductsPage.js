import React from 'react';
import Card from '../components/Card';
import Cart from '../components/Cart';

const ProductsPage = ({products,name,productCart }) => {
    let filterProducts;
    if(name.includes('men') || name.includes('women')){
        filterProducts = products.filter(product => product.gender === name)
        return <div><Cart items={productCart}/><Card productsData={filterProducts} /></div>;  
    } else {
        filterProducts = products;
        return <div><Cart items={productCart}/><Card productsData={filterProducts} /></div>;; 
    }
    
}

export default ProductsPage
