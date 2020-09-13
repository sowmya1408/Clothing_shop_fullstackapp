import React from 'react';
import Card from '../components/Card'

const CategoryPage = ({productCategory}) => {
    console.log(productCategory);
    return (
        <div>
            <Card productsData={productCategory}/>
        </div>
    )
}

export default CategoryPage
