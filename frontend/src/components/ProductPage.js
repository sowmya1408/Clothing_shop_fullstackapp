import React from 'react';
import Fade from 'react-reveal';
import Button from './Button';
import CartDropDown from './CartDropDown';
import Cart from './Cart';


const ProductPage = ({product, cartEvent, addToCartProduct,removeCart}) => {
    return (
        <Fade left cascade>
        <div>
        <Cart items={addToCartProduct} cartProduct={addToCartProduct} productFromCart={removeCart} />
        <CartDropDown cartProduct={addToCartProduct} productFromCart={removeCart}/> 
            {product ? product.map(prod => {
               return (
               <section className="product-section" key={prod.id}> 
               <img className="productOne-container" src={prod.image} alt={prod.name}/>
               <ul className="productone">
               <li><h2>{(prod.name).toUpperCase()}</h2></li>
               <li>{prod.brand}</li>
               <li>{prod.description}</li>
               <li><Button type="button" text="Add to cart" goPath="#" cartEvent={cartEvent}/></li>
               </ul>
               </section>

               )
            }): null}
          
        </div>
        </Fade>
    )
}

export default ProductPage
