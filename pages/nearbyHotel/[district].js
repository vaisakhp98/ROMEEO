// import Navigation from '@components/Navigation'
import SearchBox2 from '@components/SearchBox2'
import Footer from '@components/footer'
import HotelsListTile from '@components/hotelsListTile'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { listHotels } from '@graphql/queries'
import AuthNavigation from '@components/authNavigation'


export default function HotelsList() {
  const router = useRouter()
  const { district } = router.query

  const [hotelList, setHotelList]=useState([])
  useEffect(()=>{
    const fetchDestinations = async () => {
        const destinationData = await API.graphql({
            query: listHotels,
            variables: { id: id },
            filter: {
              district: {eq: "Trissur"},
            }
        })
        await setDestination(destinationData.data.getLocation)
    }

    fetchDestinations()
  }, [id])

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
