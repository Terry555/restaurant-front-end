import React from 'react';
import dish1 from '../css/assets/dish1.jpg';
import dish2 from '../css/assets/dish2.jpg';
import dish3 from '../css/assets/dish3.jpg';


function TopDishes(props) {

    return(
      <main className="topdishes-main">
        <section className="topdishes-section"><img src={dish1} className="topdishes-image" alt="burger"/></section>
        <section className="topdishes-section"><img src={dish2} className="topdishes-image" alt="pasta"/></section>
        <section className="topdishes-section"><img src={dish3} className="topdishes-image" alt="broccoli"/></section>
      </main>
    );

}

export default TopDishes;
