import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function HotelHero() {
    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <hr className="horiLine"/>
        <Slider className="sliderMain" {...settings}>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 2</h3>
          </div>
          <div>
            <h3>SLide 3</h3>
          </div>
          <div>
            <h3>Slide 4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
      );
    }
  
  