import React from 'react';
import Card from '../components/Card';

const ProductsPage = ({products,name}) => {
    let filterProducts;
    if(name.includes('men') || name.includes('women')){
        filterProducts = products.filter(product => product.gender === name)
        return <div><Card productsData={filterProducts} /></div>;  
    } else {
        filterProducts = products;
        return <div><Card productsData={filterProducts}/></div>;; 
    }
    
}

export default ProductsPage
