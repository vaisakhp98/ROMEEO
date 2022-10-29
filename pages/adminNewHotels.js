import AdminNav from '../components/adminNav'
import AdmNewHotel from '../components/adminNewHotel'
import { useState,useEffect } from 'react'
import axios from 'axios'

const AdminNewHotel = () => {

  const [adminNewHotel, setAdminNewhotel]=useState([])
  useEffect(()=>{
    axios.get('/api/adminNewHotels')
    .then((res)=>{setAdminNewhotel(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdmNewHotel 
        adminNewHotel={adminNewHotel}
      />
      
    </div>
  )
}

export default adminNewHotel
