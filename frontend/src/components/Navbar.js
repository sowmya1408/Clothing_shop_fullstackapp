import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumber } from "../actions/getActions";
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const { basketProps } = props;
  useEffect(() => {
    getNumber();
  }, []);
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

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumber })(Navbar);
