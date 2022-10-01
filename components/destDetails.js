import { useRouter } from "next/router";
import {MdIosShare,MdOutlinePool,MdLocalParking,MdSmokingRooms} from 'react-icons/md'
import {AiFillHeart,AiFillCar} from 'react-icons/ai'
import {BsHash} from 'react-icons/bs'


export default function DestDetails() {
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

                        <h3 className="destRating">Rating</h3>

                        <h3 className="destAbout">About Place</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type
                         specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in
                         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishi</p>

                         <div className="destfacilitiesSection">
                            <h3>Tags</h3>

                            <div className="destFacilitiesMainContainer">
                                <div className="destfacilitiesMain">
                                    <div>
                                        <BsHash/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        Romantic
                                    </div>
                                </div>

                                <div className="destfacilitiesMain">
                                    <div>
                                        <BsHash/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        Adventure
                                    </div>
                                </div>

                                <div className="destfacilitiesMain">
                                    <div>
                                        <BsHash/>
                                    </div>
                                    <div className="destfacilitiesTitle">
                                        Family
                                    </div>
                                </div>

                              
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
  
  