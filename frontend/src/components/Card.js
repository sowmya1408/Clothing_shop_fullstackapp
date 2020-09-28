import React from "react";
import "../App.css";
import Fade from "react-reveal";
import { Link } from "react-router-dom";
import Category from "./Category";

const Card = ({ productsData }) => {
  console.log(productsData);
  return (
    <Fade bottom cascade>
      <div>{ productsData ? <Category productsData={productsData}/> : null
}</div>
     <div className="products-wrapper">
        {productsData
          ? productsData.map((product) => (
            <Link to={`/product/${product.id}`} className="products_container" key={product.name}>
              <ul>
                <li className="product-image">
                  <img src={product.image} alt={product.name} />
                </li>
                <li>{product.brand.toUpperCase()}</li>
                <li>{product.price} DKK</li>
              </ul>
              </Link>
            ))
          : null}
      </div>
    </Fade>
  );
};

export default Card;
