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


  return (
    <div className={styles.container}>
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
