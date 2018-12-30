import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {

  render(){
    return(
      <div>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Booking">Booking</NavLink>
      <NavLink to="/HoursDirections">Hours & Directions</NavLink>
      <NavLink to="/Menu">Menu</NavLink>
      <h1>NAVBAR PAGE</h1>
      </div>
    );
  }

}

export default Navbar;
