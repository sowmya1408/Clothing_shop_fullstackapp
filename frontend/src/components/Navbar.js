import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getNumber} from '../actions/getActions';

const Navbar = (props) => {
    const {basketProps} = props;
  useEffect(() => {
      getNumber();
  }, [])
    return (
        <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">cart<span>{basketProps.basketNumbers}</span></a></li>
        </ul>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
  })
  
  export default connect(mapStateToProps,{ getNumber})(Navbar)
  
