import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { loadImage } from "@lib/image";

export default function DestHero(props) {
  const {item} = props
  const [image, setImage] = useState()

    useEffect(()=>{
        const fetchImage = async () => {
            if(!item.image) return
            const url = await loadImage(item.image[0])
            setImage(url)
        }

        fetchImage()
    },[item.image])

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
                {/* {props.item?.image?.map((item, key)=> 
                  <div key={key}> */}
                      <img 
                        className="destinationImageTile"
                        src={image}
                      />
                  {/* </div>
          )} */}
        </Slider>
            </div>
          
        </div>
      );
    }
  
  