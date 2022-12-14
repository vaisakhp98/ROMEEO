import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import SearchBox from '../components/SearchBox'
import TopCategories from '../components/topCategories'
import MostVisited from '../components/mostVisited'
import RecommendedHome from '../components/recommendedHome'
import Footer from '../components/footer'
import AuthNavigation from '../components/authNavigation'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { listLocations } from '../graphql/queries'
import {API} from 'aws-amplify'

import "@fontsource/rubik"


export default function Home() {
  const [mostVisited, setMostVisited]=useState([])

  useEffect(()=>{
    axios.get('/api/homePageMostVisited')
    .then((res)=>{setMostVisited(res.data)})
    .catch((err)=>console.log("An error has occured"))
  },[])

  const [recommended, setRecommended]=useState([])
  useEffect(()=>{
    axios.get('/api/homePageRecommended')
    .then((res)=>{setRecommended(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  const submit=(e)=>{
    e.preventdefault
    alert("submitted")
  }


  return (
    <div className={styles.container}>
      {/* {locations.map((item)=><h1>{item.createdAt}</h1>)} */}
      {/* <Navigation/> */}
      <AuthNavigation/>
      <Hero/>
      <SearchBox/>
      <TopCategories/>
      <MostVisited
        mostVisited = {mostVisited} 
      />
      <RecommendedHome 
        recommended = {recommended}
      />
      <Footer/>
    </div>
  )
}
