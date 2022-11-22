import Navigation from '@components/Navigation'
import styles from '../../styles/Home.module.css'

import SearchBox2 from '@components/SearchBox2'
import Footer from '@components/footer'
import HotelsListTile from '@components/hotelsListTile'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { listHotels } from '@graphql/queries'
import AuthNavigation from '@components/authNavigation'
import { useRouter } from 'next/router'
import { API } from 'aws-amplify'


export default function HotelsList() {
  const router = useRouter()
  const { district } = router.query

  const [hotelList, setHotelList]=useState([])
  useEffect(()=>{
    const fetchDestinations = async () => {
        const destinationData = await API.graphql({
            query: listHotels,
            filter: {
              district: {eq: "Trissur"},
            }
        })
        await setHotelList(destinationData.data.listHotels.items)
    }

    fetchDestinations()
  }, [district])

  return (
    <div className={styles.container}>
      <AuthNavigation/>
      <SearchBox2/>
      <HotelsListTile 
        hotelList = {hotelList}
      />
      <Footer/>
    </div>
  )
}
