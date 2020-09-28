import React from 'react';
import Fade from 'react-reveal'; 
import Button from './Button';

const CartDropDown = ({cartProduct,productFromCart}) => {
    const totalProductCost = cartProduct.reduce((initialValue, cartProduct) => initialValue + (cartProduct.price * cartProduct.count), 0) 

    return (
        <Fade left cascade>
         <section className="carts_container">
       
             {
                 cartProduct.length > 0 ?  
                 <div>
                 <ul className="carts-wrapper">
                 <li>Image</li>
                 <li>name</li>
                 <li>quantity</li>
                 <li>price</li> 
             </ul>
        
            {cartProduct.map(cart => {
               return (
               <ul key={cart.id} className="carts-wrapper">
                <li><ion-icon name="close-circle-outline" onClick={() => productFromCart(cart.id)}></ion-icon> 
                </li>   
                <li className="cart-image">
                    <img src={cart.image} alt={cart.name} />
                </li>
                <li>{(cart.name).toUpperCase()}</li>
                <li>{cart.count}</li>
                <li>{cart.price * cart.count} DKK</li>
    
            </ul>)
            
 
            })}
            <p>Total: {totalProductCost}</p>
            <Button type="button" text="PROCEED" goPath="/cart" /> 
            </div> : 'cart is empty'
        }
       
              </section> 
        
           </Fade>
    )
}

export default CartDropDown
