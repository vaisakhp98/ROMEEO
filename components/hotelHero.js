import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function HotelHero(props) {
    var settings = {
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase:"linear",
      };
      return (

        <div>
        <hr className="horiLine"/>
        <Slider className="sliderMain" {...settings}>
        {props.hotelDetails.map((item, key)=> 
          <div key={key}>
          <img 
              className="destinationImageTile"
              src={item.image}
              />
        </div>
        )}
      </Slider>
      </div>
      );
    }
  
  