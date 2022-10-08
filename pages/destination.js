import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import DestHero from '../components/destHero'
import TopCategories from '../components/topCategories'
import DestDetails from '../components/destDetails'
import DestReviews from '../components/destReviews'

import { useState,useEffect } from "react";
import axios from 'axios'



export default function destination() {

  const [destDetails, setDestDetails]=useState([])
  useEffect(()=>{
    axios.get('/api/destination')
    .then((res)=>{setDestDetails(res.data)})
    .catch((err)=>console.log("An error has occured"))
  },[])

  const [destReviews, setDestReviews]=useState([])
  useEffect(()=>{
    axios.get('/api/destReviews')
    .then((res)=>{setDestReviews(res.data)})
    .catch((err)=>console.log("An error has occured"))
  },[])

  return (


    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <TopCategories/>
      <DestHero 
        destDetails = {destDetails}
      />
      <DestDetails
        destDetails = {destDetails}
      />
      <DestReviews
        destReviews = {destReviews}
      />
      <Footer/>
    </div>
  )
}
