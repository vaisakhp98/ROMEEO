import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Navigation from '../components/Navigation'
import ProfileTabs from '../components/profileTabs'
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function profile() {

  const [profileBookings, setProfileBookings]=useState([])
  useEffect(()=>{
    axios.get('/api/profileBookings')
    .then((res)=>{setProfileBookings(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className={styles.container}>
      <Navigation/>
      <ProfileTabs 
        profileBookings = {profileBookings}
      />
      <Footer/>
    </div>
  )
}
