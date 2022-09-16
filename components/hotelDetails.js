import { useRouter } from "next/router";
import { useState } from "react";

export default function HotelDetails() {

  const[isHidden,setisHidden] = useState(false)

  const router = useRouter()
  const handleClick = (e)=>{
      e.preventDefault()
      router.push('/hotelsList')
  }
      return (
        <div>
            <div className="destDetail"> 
               <div className="destDetailsMain">
                    <div className="destDetailsLeft">
                        <h3>Name of the place</h3>
                        <p>locarion of the place</p>

                        <h3>Rating</h3>

                        <h3>About Place</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type
                         specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in
                         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishi</p>

                         <h4><i>Number of guests : 3 Max</i></h4>

                         <div>
                            <button type="button" onClick={()=>setisHidden(!isHidden)}>Book Now</button>
                            <button type="button" >Add Review</button>
                            
                         </div>
                    </div>
                    <div>
                        <div className="hotelMediaButtons">
                            <button>Share</button>
                            <button>Like</button>
                        </div>
                        
                        
                        {isHidden && 
                        
                        <div className="hotelDetailsBooked">
                            <div className="hotelDetailsBookedMain">
                                <div>
                                    Booked
                                </div>
                                <div>
                                    15/09/2023
                                </div>
                                <div>
                                    2 Rooms
                                </div>
                            </div>    
                        </div>
                        
                        }
                        
                    </div>
               </div>
            </div>
            
        </div>
      );
    }
  
  