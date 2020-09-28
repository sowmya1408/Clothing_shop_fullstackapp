import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
    <ul>
      <li>
        <Link to="/products/men">Men</Link>
      </li>
      <li>
        <Link to="/products/women">Women</Link>
      </li>
      <li>
        <Link to="/products/allproducts">All Products</Link>
      </li>
    </ul>
    </nav>
  );
};


export default Navbar;
