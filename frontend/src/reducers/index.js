import {combineReducers} from 'redux';
import productReducers from './productReducers';
import basketReducer from './basketReducers';



export default combineReducers({
   productState: productReducers,
   basketState: basketReducer,
})