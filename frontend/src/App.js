import React from 'react';
import ProductsContainer from './container/ProductsContainer';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Headers from './components/Headers';
import Cart from './components/Cart';
import CartProducts from './components/CartProducts';
import ProductsCategoryContainer from './container/ProductsCategoryContainer';
import ProductWithId from './container/ProductWithId';




function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="grid-container">
    <Headers />
    <Navbar/>
    <Cart/>
     <Switch>
     <Route path="/products/:slug" component={ProductsContainer}></Route>
     <Route path="/search/:CategorySlug/:genderSlug" component={ProductsCategoryContainer}></Route>
     <Route path="/product/:idSlug" component={ProductWithId}></Route>
     <Route exact path="/" component={Homepage}></Route>
     </Switch>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
