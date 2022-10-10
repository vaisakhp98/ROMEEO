import AdminNav from '../components/adminNav'
import AdminNewHotel from '../components/adminNewHotel'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function adminNewHotel() {

  const [adminNewHotel, setAdminNewHotel]=useState([])
  useEffect(()=>{
    axios.get('/api/adminNewHotels')
    .then((res)=>{setAdminNewHotel(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminNewHotel 
        adminNewHotel={adminNewHotel}
      />
      
    </div>
  )
}
