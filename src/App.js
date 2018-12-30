import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';


class App extends Component {

  state = {
    products: []
  }

componentDidMount(){
  fetch('http://localhost:3000/api/v1/products')
  .then(response => response.json())
  .then(data => {
    this.setState({
      products: data
    })
  })
}

  render() {
    return (
      <div>
        <Navbar />
        <h1>WELCOME TO THE HOME PAGE AKA APP</h1>
        <ul>
          {this.state.products.map(product =>
            <li key={product.id}>{product.name}, {product.kind}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default App;
