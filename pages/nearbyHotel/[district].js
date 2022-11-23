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
import { API, graphqlOperation } from 'aws-amplify'
import { set } from 'nprogress'
import { searchHotel } from '../../lib/helpers/hotels'


export default function HotelsList() {
  const router = useRouter()
  const { district } = router.query

  const [hotelList, setHotelList]=useState([])
  useEffect(()=>{
    const fetchDestinations = async () => {
        const destinationData = await API.graphql(graphqlOperation(listHotels ,{
            filter: {
              district: {eq:  district},
            }
        }))
        await setHotelList(destinationData.data.listHotels.items)
    }

    fetchDestinations()
  }, [district])

  const [search, setSearch] = useState("")

  const handleSearch = async () => {
    searchHotel(search, { district })
    .then((res)=> setHotelList(res))
    .catch((err)=> console.log(err))
  }
  const handleChange = () => {
    setSearch(e.target.value)
  }
  return (
    <div className={styles.container}>
      <AuthNavigation/>
      <SearchBox2
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      <HotelsListTile 
        hotelList = {hotelList}
      />
      <Footer/>
    </div>
  )
}
