import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useState } from 'react';
import { useRouter } from 'next/router';
import {AiFillStar,AiFillHeart} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import { IconContext } from 'react-icons'
import axios from 'axios';
import { useEffect } from 'react';
import "@fontsource/rubik"

import { createLocation} from "../graphql/mutations";
import { getLocation , listLocations} from "../graphql/queries";
import {API, Auth , currentUserInfo} from 'aws-amplify'


export default function MostVisited(props) {

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

    const image = './Pages/api/homePageMostVisited'

    const router = useRouter()

    const handleMostVisitedClick = (e)=>{
        e.preventDefault()
        router.push('/destination')
    }

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
            Most Visited
        </div>
        <div className="mostVisitedSection">
            {
            locations.map((item, key)=>{ 
            return(
            
            <div key={key} className="mostVisitedTiles" onClick={handleMostVisitedClick}>
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
                    <h6> <MdLocationOn/> {item.district}</h6>
                </div>
                <div className='likeButtonSection'>
                    <p>{item.rating} <AiFillStar/> </p>
                    <button className='likeButton'>
                        <IconContext.Provider value={{className : "likeButtonIcon"}}>
                            <AiFillHeart/> 
                            </IconContext.Provider>
                        </button>
                </div>
            </div>
        </div>)})
            
            }

        </div>
      </div>
    )
  }
  