import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';
import "@fontsource/rubik"

import { createLocation} from "../graphql/mutations";
import { getLocation , listLocations} from "../graphql/queries";
import {API, Auth , currentUserInfo} from 'aws-amplify'
import Item from './Item/singleItem';


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

      
    return (
      
      <div className="mostVisitedMain" style={{fontFamily:'rubik',fontWeight:300}}>
        <div className="mostVisitedText">
            Most Visited
        </div>
        <div className="mostVisitedSection">
            {
              locations.map((item, key)=><Item item={item} key={key}/>)
            }

        </div>
      </div>
    )
  }
  