import AdminNav from '../components/adminNav'
import HotelAdminCancelations from '../components/hotelAdminCancelations'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function hotelCancelations() {

  const [hotelAdminCancelation, setHotelAdminCancelation]=useState([])
  useEffect(()=>{
    axios.get('/api/hotelAdminCancelations')
    .then((res)=>{setHotelAdminCancelation(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HotelAdminCancelations 
        hotelAdminCancelation={hotelAdminCancelation}
      />
    </div>
  )
}
