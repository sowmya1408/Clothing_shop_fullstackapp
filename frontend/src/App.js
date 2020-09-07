import React from 'react';
import Homepage from './pages/Homepage';
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Homepage />  
    </div>
    </Provider>
  );
}

export default App;
