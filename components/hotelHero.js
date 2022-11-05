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
          <div className="sliderContainer">
            <Slider className="sliderMain" {...settings}>
              {props.hotelDetails?.image?.map((item, key)=> 
                <div key={key}>
                <img 
              className="destinationImageTile"
              src={item}
              />
        </div>
        )}
      </Slider>
          </div>
        
      </div>
      );
    }
  
  