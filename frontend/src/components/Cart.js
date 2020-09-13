import React from "react";
import CardProducts from "./CartProducts";

const Cart = () => {
  return (
    <div className="cart">
      <ion-icon name="cart-outline"></ion-icon>
      <span></span>
      <CardProducts />
    </div>
  );
};

export default Cart;
