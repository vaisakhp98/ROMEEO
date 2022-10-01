import { useRouter } from "next/router";
import { useState } from "react";
import {MdIosShare , MdOutlinePool ,MdLocalParking ,MdSmokingRooms} from 'react-icons/md'
import {AiFillHeart , AiFillInfoCircle ,AiFillCar} from 'react-icons/ai'
import {FaHotTub} from 'react-icons/fa'

export default function HotelDetails() {

  const[isHidden,setisHidden] = useState(false)

  const router = useRouter()
  const handleClick = (e)=>{
      e.preventDefault()
      router.push('/hotelCheckout')
  }
      return (
        <div>
            <div className="destDetail"> 
               <div className="destDetailsMain">
                    <div className="destDetailsLeft">
                        <h3>Name of the place</h3>
                        <p>locarion of the place</p>

                        <h3 className="destRating">Rating</h3>

                        <h3 className="destAbout">About Place</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type
                         specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in
                         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishi</p>

                         <div className="destImportantInfo">
                            <AiFillInfoCircle/>
                            <i className="destImportantInfoText"><b>Max room capacity - 3 people</b></i>
                         </div>

                         <div className="destfacilitiesSection">
                            <h3>Facilities</h3>

                            <div className="destFacilitiesMainContainer">
                                <div className="destfacilitiesMain">
                                    <div>
                                        <MdOutlinePool/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        pool
                                    </div>
                                </div>

                                <div className="destfacilitiesMain">
                                    <div>
                                        <FaHotTub/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        Hot water
                                    </div>
                                </div>

                                <div className="destfacilitiesMain">
                                    <div>
                                        <AiFillCar/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        valet
                                    </div>
                                </div>

                                <div className="destfacilitiesMain">
                                    <div>
                                        <MdLocalParking/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        parking
                                    </div>
                                </div>

                                <div className="destfacilitiesMain">
                                    <div>
                                        <MdSmokingRooms/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        smoking room
                                    </div>
                                </div>
                            </div>

                            

                            

                         </div>
                         

                         <div className="destCTAButtons">
                            <button type="button" onClick={handleClick} className="destHotelsNearbyButton">Book Hotel</button>
                            <button className="destHotelsAddReviewsButton">Add Review</button>
                         </div>
                    </div>
                    <div className="destShareLikeButtonsMain">
                        <button className="destShareButton"><MdIosShare/></button>
                        <button className="destLikeButton"><AiFillHeart/></button>
                    </div>
               </div>
            </div>
            
        </div>
      );
    }
  
  