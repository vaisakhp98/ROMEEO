import AdminNav from '../components/adminNav'
import AdminNewDestination from '../components/adminNewDestination'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function adminIndex() {

  const [adminNewDestination, setAdminNewDestination]=useState([])
  useEffect(()=>{
    axios.get('/api/adminNewDestination')
    .then((res)=>{setAdminNewDestination(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])


  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminNewDestination
        adminNewDestination={adminNewDestination}
      />
    </div>
  )
}
