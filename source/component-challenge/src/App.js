import React, { Component } from 'react';
import './App.css';
import Products from './products'
import Product from './product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>
        <Products />
      </div>
    );
  }
}

export default App;
