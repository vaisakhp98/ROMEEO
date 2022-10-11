import AdminNav from '../components/adminNav'
import HotelAdminCheckedOut from '../components/hotelAdminCheckedOut'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function hotelAdminCheckedOut() {
  
  const [hotelAdminCheckedOut, setHotelAdminCheckedOut]=useState([])
  useEffect(()=>{
    axios.get('/api/hotelAdminCheckedOut')
    .then((res)=>{setHotelAdminCheckedOut(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HotelAdminCheckedOut 
        hotelAdminCheckedOut={hotelAdminCheckedOut}
      />
    </div>
  )
}
