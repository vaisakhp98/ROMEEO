import AdminNav from '../components/adminNav'
import HAdminCheckedOut from '../components/hotelAdminCheckedOut'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function HotelAdminCheckedOut() {
  
  const [hotelAdminCheckedOut, setHotelAdmincheckedOut]=useState([])
  useEffect(()=>{
    axios.get('/api/hotelAdminCheckedOut')
    .then((res)=>{setHotelAdmincheckedOut(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HAdminCheckedOut 
        hotelAdminCheckedOut={hotelAdminCheckedOut}
      />
    </div>
  )
}
