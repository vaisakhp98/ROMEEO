import styles from '../../styles/Home.module.css'
import Navigation from '@components/Navigation'
import SearchBox2 from '@components/SearchBox2'
import Footer from '@components/footer'
import TopCategories from '@components/topCategories'
import HotelHero from '@components/hotelHero'
import HotelDetails from '@components/hotelDetails'
import HotelReviews from '@components/hotelReviews'
import { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import DestReviews from '@components/Reviews'
import { useRouter } from 'next/router'
import { getHotel } from '@graphql/queries'
import { UserContext } from '@lib/context/authContext';
import { API, graphqlOperation } from 'aws-amplify'
import { listHotelReviews } from '@graphql/queries'
import { createHotelReview } from '@graphql/mutations'





export default function Hotel() {
    const router = useRouter()
    const { id } = router.query
    const context = useContext(UserContext)

    const [destination, setDestination] = useState({})
      useEffect(()=>{
        const fetchDestinations = async () => {
            const destinationData = await API.graphql({
                query: getHotel,
                variables: { id: id }
            })
            await setDestination(destinationData.data.getHotel)
        }
  
        fetchDestinations()
      }, [id])

      const [reviews, setReviews] = useState([])

    useEffect(()=>{
      const fetchReviews = async () => {
          const destinationData = await API.graphql(graphqlOperation(listHotelReviews,{
              filter: { hotelReviewId: id }
          }))
          await setReviews(destinationData.data.listHotelReviews.items)
      }

      fetchReviews()
    }, [id])

    const addReview = async (e) => {
      e.preventDefault()
      const data = {
        title: e.target.title.value,
        content: e.target.content.value,
        hotelReviewId: id,
        userId: context.user.sub
      }

      const destinationData = await API.graphql({
          query: createHotelReview,
          variables: {input: data},
          authMode: 'AMAZON_COGNITO_USER_POOLS',
      })

      setReviews((prevState=>{
        return [
          destinationData.data.createHotelReview,
          ...prevState,
        ]
      }))
  }


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
        reviews={reviews}
        addReview = {addReview}
      />
      
      <Footer/>
    </div>
  )
}
