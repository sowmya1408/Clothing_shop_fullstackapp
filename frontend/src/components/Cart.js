import React from "react";
import CartDropDown from './CartDropDown'

const Cart = ({items}) => {
  return (
    <div className="cart">
      <ion-icon name="cart-outline" ></ion-icon>
      <span>{items.length}</span>
    </div>
  );
};

export default Cart;
