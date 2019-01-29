import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TopDishes from './components/TopDishes';
import HoursDirections from './components/HoursDirections';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';




class App extends Component {



  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <TopDishes />
        <HoursDirections />
        <Booking />
        <Footer />
      </div>
    );
  }
}

export default App;
