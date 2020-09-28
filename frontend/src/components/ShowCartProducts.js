import React from 'react';
import Button from './Button';

function ShowCartProducts() {
    const cartProducts = JSON.parse(localStorage.getItem('cartItems'));
    const totalProductCost = cartProducts.reduce((initialValue, cartProduct) => initialValue + (cartProduct.price * cartProduct.count), 0) 
    return (
        <div className='cartpage-container'>
            {cartProducts.map(cart => {
               return (
               <ul key={cart.id} className="carts-wrapper">
                <li className="cart-image">
                    <img src={cart.image} alt={cart.name} />
                </li>
                <li>{(cart.name).toUpperCase()}</li>
                <li>{cart.count}</li>
                <li>{cart.price * cart.count} DKK</li>
    
            </ul>)
            
 
            })}
            <p>Total: {totalProductCost}</p>
            <Button type="button" text="CHECKOUT" goPath="/form" /> 

        </div>
    )
}

export default ShowCartProducts
