import React, { Component } from 'react';

function About(props) {

    return(
      <main className="about">
        <section className="about-section">
          <p className="about-header">BASQUE WINES, CIDERS, AND TAPAS</p>
          <p classname="about-paragraph">Tinto is an intimate Basque tapas bar and restaurant serving small plates such as montaditos (crostini), bocadillos (finger sandwiches) and brochettes (skewers) typical of northeastern Spain’s pintxo bars, complemented by the region’s ciders, sangrias and of course, a great deal of wine. The restaurant showcases the flavors of the mountainous coastal region that blurs the lines of demarcation between Spain and France, all in a cozy setting that includes two distinct dining rooms and a sultry underground lounge.</p>
        </section>

        <section className="about-section">
          <p className="about-header">ABOUT CHEF GARCES</p>
          <p classname="about-paragraph">Since opening his first restaurant in 2005, Chef Jose Garces has emerged as an enormous talent and one of the nation’s most gifted chefsand restaurateurs. Today, he is the owner and operator of more than a dozen restaurants across the country, plus a thriving event planning division and 40-acre Luna Farm. He is a 2009 winner of the James Beard Foundation’s prestigious “Best Chef, Mid-Atlantic” award and one of only a few chefs in the country to hold the coveted title of Iron Chef. Chef Garces is also the author of two cookbooks, The Latin Road Home (Lake Isle Press, October 2012), a culinary and cultural tour of Ecuador, Spain, Mexico, Cuba and Peru, and his stunning first cookbook, Latin Evolution (Lake Isle Press, Fall 2008).</p>
        </section>

        <section className="about-section">
          <p className="about-header">BEHIND THE SCENES</p>
          <p classname="about-paragraph">Named for the Garces Family’s adorable Bull Dog and the region’s breathtaking harvest moons, Luna Farm is a sustainable, all-organic 40-acre farm in Ottsville, PA. It supplies our East Coast restaurants with the finest locally grown organic vegetables, fruits, eggs and honey year-round.
Check out the video “Farm Job: Behind the Scenes With Jose Garces’ 26-Year-Old Farmer” below from Zagat National to learn about how this fresh produce is cultivated and used in Tinto.</p>
        </section>
      </main>
    );
}


export default About;
