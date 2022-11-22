import styles from '../../styles/Home.module.css'
import Navigation from '@components/Navigation'
import SearchBox2 from '@components/SearchBox2'
import Footer from '@components/footer'
import TopCategories from '@components/topCategories'
import HotelHero from '@components/hotelHero'
import HotelDetails from '@components/hotelDetails'
import HotelReviews from '@components/hotelReviews'
import { useState,useEffect } from 'react'
import axios from 'axios'
import DestReviews from '@components/Reviews'




export default function Hotel() {
    const router = useRouter()
    const { id } = router.query
    const context = useContext(UserContext)
  
    const [destination, setDestination] = useState({})
      useEffect(()=>{
        const fetchDestinations = async () => {
            const destinationData = await API.graphql({
                query: getLocation  ,
                variables: { id: id }
            })
            await setDestination(destinationData.data.getLocation)
        }
  
        fetchDestinations()
      }, [id])


  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <TopCategories/>
      <HotelHero
        hotelDetails={destination}
      />
      <HotelDetails
        hotelDetails={destination}
      />
      <DestReviews 
        hotelReview={hotelReview}
        reviews={[]}
      />
      
      <Footer/>
    </div>
  )
}
