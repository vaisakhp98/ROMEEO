import AdminNav from '../components/adminNav'
import HAdminCheckedOut from '../components/hotelAdminCheckedOut'
import { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import { API, graphqlOperation } from 'aws-amplify'
import { UserContext } from '@lib/context/authContext';
import { listHotelBookings } from "@graphql/queries"



export default function HotelAdminCheckedOut() {
  const context = useContext(UserContext)

  const [hotels, setHotels] = useState([])
  useEffect(()=>{
    const fetchHotels = async () =>{
      const hotelData = await API.graphql(graphqlOperation(listHotelBookings, {
        filter: {
          userId: {eq: context.user?.sub}
        },
      })) as any

      setHotels(hotelData.data.listHotelBookings.items)
    }

    fetchHotels()
  }, [context.user])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HAdminCheckedOut 
        hotels={hotels}
      />
    </div>
  )
}
