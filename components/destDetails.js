import { useRouter } from "next/router";
import {MdIosShare,MdOutlinePool,MdLocalParking,MdSmokingRooms,MdLocationOn} from 'react-icons/md'
import {AiFillHeart,AiFillCar} from 'react-icons/ai'
import {BsHash} from 'react-icons/bs'


export default function DestDetails(props) {
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
                        <h3>{props.destDetails.locationName}</h3>
                        <p><MdLocationOn/>{props.destDetails.locationDistrict}</p>

                        <h3 className="destRating">Rating</h3>

                        <h3 className="destAbout">About Place</h3>
                        <p>{props.destDetails.description}</p>

                         <div className="destfacilitiesSection">
                            <h3>Tags</h3>

                            <div className="destFacilitiesMainContainer">
                                {props.destDetails?.tags?.map((tag,key)=>
                                <div key={key} className="destfacilitiesMain">
                                    <div>
                                        <BsHash/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        {tag}
                                    </div>
                                </div>)}
                            </div>
                         </div>

                         <div className="destCTAButtons">
                            <button type="button" onClick={handleClick} className="destHotelsNearbyButton">Hotels Nearby</button>
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
  
  