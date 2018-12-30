import React, { Component } from 'react';
import './App.css';

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
        <ul>
          {this.state.products.map(product =>
            <li key={product.id}>{product.name}, {product.kind}, <img src={product.image_url} alt="food"/></li>
        )}
        </ul>
      </div>
    );
  }
}

export default App;
