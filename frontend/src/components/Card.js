import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/getProducts';
import '../App.css';


const Card = (props) => {
    console.log(props);
 const {productsData} = props.productState;
console.log(productsData);

useEffect(() => {
    props.loadProducts();
}, [])

    return (
        <div className="products-wrapper">
       { productsData ? 
       productsData.map(product => <ul className="products_container" key={product.name}>
        <li className="product-image"><img src={product.image} alt={product.name}/></li>
       <li>{product.brand}</li>
        <li>{product.price}DKK</li>
        <li><button onClick={() => props.addProductToBasket()}>Add to cart</button></li>
      </ul> )
         : null}
        </div>
        
    )
}

const mapStateToProps = state => {
return state;
  }
  
export default connect(mapStateToProps,actionCreators)(Card)

