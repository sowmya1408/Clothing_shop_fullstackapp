import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getProductId } from "../actions/getProductWithId";
import EachProduct from "../pages/EachProduct";
import {useParams} from "react-router-dom";


const ProductWithId = ({getProductId, productState}) => {
   const {idSlug} = useParams();
      const {productsWithId} = productState;
   console.log(productsWithId);
    useEffect(() => {
        getProductId(idSlug);
      }, [idSlug]);
    
      
      return <EachProduct productId={productsWithId}/>
    };
    const mapStateToProps = (state) => {
      return state;
    };
    
    export default connect(mapStateToProps, {getProductId})(ProductWithId);
    
