import { useRouter } from "next/router";
import { useState } from "react";
import {MdIosShare , MdOutlinePool ,MdLocalParking ,MdSmokingRooms} from 'react-icons/md'
import {AiFillHeart , AiFillInfoCircle ,AiFillCar} from 'react-icons/ai'
import {FaHotTub} from 'react-icons/fa'

export default function HotelDetails(props) {
    

  const[isHidden,setisHidden] = useState(false)

  const router = useRouter()
  const handleClick = (e)=>{
      e.preventDefault()
      router.push('/hotelCheckout')
  }

    if(!props.hotelDetails) return <></>

      return (
        <div>
            <div className="destDetail" style={{fontFamily:'rubik',fontWeight:300}}> 
            
               <div className="destDetailsMain">
                    <div className="destDetailsLeft">
                        <h2>{props.hotelDetails.name}</h2>
                        <p>{props.hotelDetails.district}</p>

                        <h1 className="destRating">Rs.{props.hotelDetails.price} per/day </h1>

                        <h3 className="destRating">Rating {props.hotelDetails.rating}</h3>

                        <h3 className="destAbout">About Place</h3>
                        <p>{props.hotelDetails.description}</p>

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
                            {/* <button type="button" onClick={handleClick} className="destHotelsNearbyButton">Book Hotel</button> */}
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
  
  