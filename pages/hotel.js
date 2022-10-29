import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import TopCategories from '../components/topCategories'
import HotelHero from '../components/hotelHero'
import HotelDetails from '../components/hotelDetails'
import HotelReviews from '../components/hotelReviews'
import { useState,useEffect } from 'react'
import axios from 'axios'




export default function Hotel() {

  const [hotelDetails, setHotelDetails]=useState([])
  useEffect(()=>{
    axios.get('/api/hotel')
    .then((res)=>{setHotelDetails(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  const [hotelReview, setHotelReviews]=useState([])
  useEffect(()=>{
    axios.get('/api/hotelReviews')
    .then((res)=>{setHotelReviews(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])


  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <TopCategories/>
      <HotelHero
        hotelDetails={hotelDetails}
      />
      <HotelDetails
        hotelDetails={hotelDetails}
      />
      <HotelReviews 
        hotelReview={hotelReview}
      />
      
      <Footer/>
    </div>
  )
}
