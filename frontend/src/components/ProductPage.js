import React from 'react';
import Fade from 'react-reveal';
import Button from './Button';


const ProductPage = ({product}) => {
    console.log(product);
    return (
        <Fade left cascade>
        <div>
            {product ? product.map(prod => {
               return (
               <section className="product-section" key={prod.id}>  
               <img className="productOne-container" src={prod.image} alt={prod.name}/>
               <ul className="productone">
               <li><h2>{(prod.name).toUpperCase()}</h2></li>
               <li>{prod.brand}</li>
               <li>{prod.description}</li>
               <li><Button type="button" text="Add to cart"/></li>
               </ul>
               </section>
               )
            }): null}
        </div>
        </Fade>
    )
}

export default ProductPage
