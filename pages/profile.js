import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import {Auth} from 'aws-amplify'
// import '@aws-amplify/ui-react/style.css' 
import {Authenticator} from '@aws-amplify/ui-react'
import Navigation from '../components/Navigation'
import ProfileTabs from '../components/profile'
import { useState,useEffect } from 'react'
import axios from 'axios'



export default function Profile() {


 
  const [profileBookings, setProfileBookings]=useState([])
  useEffect(()=>{
    axios.get('/api/profileBookings')
    .then((res)=>{setProfileBookings(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  const [profileViewDestination, setProfileViewDestination]=useState([])
  useEffect(()=>{
    axios.get('/api/profileViewDestination')
    .then((res)=>{setProfileViewDestination(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className={styles.container}>
      
      <Navigation/>
      <Authenticator loginMechanism = {['email']}  signUpAttributes={['name', 'phone_number']}>
        {({signOut,user})=>(
            <ProfileTabs 
            profileBookings = {profileBookings} 
            profileViewDestination={profileViewDestination}
          />
        )}
      </Authenticator>
      
      <Footer/>
    </div>
  )
}
