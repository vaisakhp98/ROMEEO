import AdminNav from '../components/adminNav'
import AdminNewUsers from '../components/adminNewUsers'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function adminIndex() {

  const [adminNewUser, setAdminNewUser]=useState([])
  useEffect(()=>{
    axios.get('/api/adminNewUsers')
    .then((res)=>{setAdminNewUser(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminNewUsers 
        adminNewUser ={adminNewUser}
      />
    </div>
  )
}
