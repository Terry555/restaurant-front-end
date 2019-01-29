import React from 'react';
import dish1 from '../css/assets/dish1.jpg';
import dish2 from '../css/assets/dish2.jpg';
import dish3 from '../css/assets/dish3.jpg';


function TopDishes(props) {

    return(
      <main className="topdishes-main">
        <section><img src={dish1} className="topdishes-image" alt="photo of burger"/></section>
        <section><img src={dish2} className="topdishes-image" alt="photo of pasta"/></section>
        <section><img src={dish3} className="topdishes-image" alt="photo of broccoli"/></section>
      </main>
    );

}

export default TopDishes;
