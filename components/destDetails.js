import { useRouter } from "next/router";
import {MdIosShare,MdOutlinePool,MdLocalParking,MdSmokingRooms,MdLocationOn} from 'react-icons/md'
import {AiFillHeart,AiFillCar} from 'react-icons/ai'
import {BsHash} from 'react-icons/bs'
import StarRating from "./ratingsStars";
import "@fontsource/rubik"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@lib/context/authContext";
import { API } from "aws-amplify";
import { createLike, updateLike } from "@graphql/mutations";


export default function DestDetails(props) {
    const [like, setLike] = useState(props.item.like?.items.length!=0 ?? false)
    const [likeId, setLikeId] = useState(props.item.like?.items[0]?.id ?? undefined)

    useEffect(()=>{
      console.log("updated like")
      setLike(props.item.like?.items.length!=0)
      setLikeId(props.item.like?.items[0]?.id)
    }, [props.item.like])
    
    const context = useContext(UserContext)
    const router = useRouter()

  const handleClick = (e)=>{
      e.preventDefault()
      router.push('/hotelsList')
  }

  const handleLike = async (e) => {
    e.preventDefault()
      const data = {
        userId: context.user.sub,
        status: !like,
        locationLikeId: props.item.id,
      }
      if(likeId) {data.id = likeId}
    const likeData = await API.graphql({
        query: likeId ? updateLike : createLike,
        variables: {input: data},
        authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    setLike(!like)
  }
      return (
        <div>
            <div className="destDetail" style={{fontFamily:'rubik',fontWeight:300}}> 
               <div className="destDetailsMain">
                
                        <div className="destDetailsLeft">
                        <h3>{props.item.name}</h3>
                        <p className="flex space-x-3 items-center">
                          {/* <MdLocationOn/> */}
                          <span>{props.item.district}</span></p>

                        <h3 className="destRating">
                            <StarRating/>
                        </h3>

                        <h3 className="destAbout text-gray-500">About Place</h3>
                        <p>{props.item.description}</p>

                         <div className="destfacilitiesSection">
                            <h3>Tags</h3>

                            <div className="destFacilitiesMainContainer">
                                {props.item?.tags?.map((tag,key)=>
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
                         </div>
                    </div>
                    <div className="destShareLikeButtonsMain">
                        <button className="destShareButton"><MdIosShare/></button>
                        <button className="destLikeButton" onClick={handleLike}><AiFillHeart style={{color: `${like ? "red" : "black"}`}}/></button>
                    </div>
               </div>
            </div>
                
        </div>
      );
    }
  
  