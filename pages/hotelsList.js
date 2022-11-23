import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import HotelsListTile from '../components/hotelsListTile'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { listHotels } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'


export default function HotelsList() {

  const [hotelList, setHotelList]=useState([])
  const fetchHotels = async () => {
    const locationData = await API.graphql(graphqlOperation(
      listHotels,
      {
        filter: {
          approval: {eq: "approved"}
        }
      }
    ))
      setHotelList(locationData.data.listHotels.items)
  }

  useEffect(()=>{
    fetchHotels()
  }, [])

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
