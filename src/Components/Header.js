import React, { Component } from 'react';
import Slider from 'react-slick';

class Header extends Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 100,
      fade: true,
      pauseOnHover: false,
      adaptiveHeight: false,
      arrows: false
    };

    return(
        <Slider {...settings}>
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h2>2</h2>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
    );

  }
}

export default Header;
