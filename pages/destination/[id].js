import styles from '../../styles/Home.module.css'
import Navigation from '@components/Navigation'
import SearchBox2 from '@components/SearchBox2'
import Footer from '@components/footer'
import DestHero from '@components/destHero'
import TopCategories from '@components/topCategories'
import DestDetails from '@components/destDetails'
import DestReviews from '@components/destReviews'

import { useState,useEffect, useContext } from "react";
import axios from 'axios'
import { getLocation, listReviews } from '@graphql/queries'
import { useRouter } from 'next/router'
import { API, graphqlOperation } from 'aws-amplify'
import { createReview } from '@graphql/mutations'
import { UserContext } from '@lib/context/authContext'



export default function Destination() {
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

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
      const fetchReviews = async () => {
          const destinationData = await API.graphql(graphqlOperation(listReviews,{
              filter: { locationReviewId: id }
          }))
          await setReviews(destinationData.data.listReviews.items)
      }

      fetchReviews()
    }, [id])

    const addReview = async (e) => {
      e.preventDefault()
      const data = {
        title: e.target.title.value,
        content: e.target.content.value,
        locationReviewId: id,
        userId: context.user.sub
      }

      const destinationData = await API.graphql({
          query: createReview,
          variables: {input: data},
          authMode: 'AMAZON_COGNITO_USER_POOLS',
      })

      setReviews((prevState=>{
        return [
          destinationData.data.createReview,
          ...prevState,
        ]
      }))
  }

  return (


    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <TopCategories/>
      <DestHero 
        item = {destination}
      />
      <DestDetails
        item = {destination}
      />
      <DestReviews
        reviews = {reviews}
        addReview = {addReview}
      />
      <Footer/>
    </div>
  )
}
