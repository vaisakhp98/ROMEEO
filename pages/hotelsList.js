import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import HotelsListTile from '../components/hotelsListTile'
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function hotelsList() {

  const [hotelList, setHotelList]=useState([])
  useEffect(()=>{
    axios.get('/api/hotelList')
    .then((res)=>{setHotelList(res.data)})
    .catch((err)=>console.log("An error has occured"))
  },[])

  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <HotelsListTile 
        hotelList = {hotelList}
      />
      <Footer/>
    </div>
  )
}
