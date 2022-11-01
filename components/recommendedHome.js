import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useState,useEffect } from 'react'
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import {MdLocationOn} from 'react-icons/md'
import "@fontsource/rubik"

import { createLocation} from "../graphql/mutations";
import { getLocation , listLocations} from "../graphql/queries";
import {API, Auth , currentUserInfo} from 'aws-amplify'



export default function RecommendedHome(props) {

    const [locations, setLocations] = useState([])
 
  const fetchLocations = async () => {
    const locationData = await API.graphql({
      // authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: listLocations
    })

    setLocations(locationData.data.listLocations.items)
  }
  useEffect(()=>{
    fetchLocations()
  }, [])

  useEffect(()=>{
    const allLocation = async () => {
    await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: listLocations,
      // variables : {id}
    }) 
    console.log(allLocation);
  }
  allLocation();
  console.log(allLocation);
  
  },[])

    return (

        

      
      <div className="mostVisitedMain" style={{fontFamily:'rubik',fontWeight:300}}>
        <div className="mostVisitedText">
            Recommended
        </div>
        <div className="mostVisitedSection">
            {
            locations.map((item, key)=> 
            <div key={key} className="mostVisitedTiles">
            <div className="mostVisitedTilesImagesDiv">
                <img 
                className="mostVisitedTilesImages"
                src={item.image}
                width={290}
                height={200}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h4>{item.name}</h4> 
                    <h6><MdLocationOn/>{item.district}</h6>
                </div>
                <div>
                    <p>{item.rating} <AiFillStar/> </p>
                    <button className='likeButton'>
                        <IconContext.Provider value={{className : "likeButtonIcon"}}>
                            <AiFillHeart/> 
                            </IconContext.Provider>
                        </button>
                </div>
            </div>
        </div>)
            
            }

        </div>
      </div>
    )
  }
  