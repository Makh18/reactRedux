import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import {Provider} from 'react-redux';
import Counter from './Componenets/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="mydiv">
      <Counter/>
      </div>
    </Provider>
  );
}

export default App;
