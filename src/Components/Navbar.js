import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {

  render(){
    return(
      <nav className="navbar">
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Booking">Booking</NavLink>
      <NavLink to="/">Restaurant Name</NavLink>
      <NavLink to="/HoursDirections">Hours & Directions</NavLink>
      <NavLink to="/Menu">Menu</NavLink>
      </nav >
    );
  }

}

export default Navbar;
