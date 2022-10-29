import AdminNav from '../components/adminNav'
import HotelAdminNewBookings from '../components/hotelAdminNewBookings'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function HotelNewBookings() {
  const [hotelAdminNewBookings, setHotelAdminNewBookings]=useState([])
  useEffect(()=>{
    axios.get('/api/hotelAdminNewBookings')
    .then((res)=>{setHotelAdminNewBookings(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HotelAdminNewBookings
        hotelAdminNewBookings={hotelAdminNewBookings}
      />
    </div>
  )
}
