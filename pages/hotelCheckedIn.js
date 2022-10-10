import AdminNav from '../components/adminNav'
import HotelAdminCheckedIn from '../components/hotelAdminCheckedIn'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function hotelCheckedIn() {

  const [hotelAdminCheckedIn, setHotelAdminCheckedIn]=useState([])
  useEffect(()=>{
    axios.get('/api/hotelAdminCheckedIn')
    .then((res)=>{setHotelAdminCheckedIn(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HotelAdminCheckedIn 
        hotelAdminCheckedIn = {hotelAdminCheckedIn}
      />
    </div>
  )
}
