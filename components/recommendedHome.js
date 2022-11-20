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
import Item from './Item/singleItem'



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

    return (
      <div className="mostVisitedMain" style={{fontFamily:'rubik',fontWeight:300}}>
        <div className="mostVisitedText">
            Recommended
        </div>
        <div className="mostVisitedSection">
            {
              locations.map((item, key)=> <Item item={item} key={key}/>)
            }
        </div>
      </div>
    )
  }
  