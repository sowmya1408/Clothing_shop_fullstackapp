import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/getProducts";
import "../App.css";

const Main = (props) => {
  const { productsData } = props.productState;
  console.log(productsData);
  const genderFilter = productsData.filter(
    (product) => product.gender === "men"
  );

  useEffect(() => {
    props.loadProducts();
  }, []);
  return (
    <ul className="products-wrapper">
      {productsData
        ? genderFilter.map((product) => (
            <li className="product-image">
              <img src={product.image} alt={product.name} />
            </li>
          ))
        : null}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Main);
