import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import SearchBox from '../components/SearchBox'
import TopCategories from '../components/topCategories'
import Footer from '../components/footer'
import AuthNavigation from '../components/authNavigation'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { listLocations } from '../graphql/queries'
import {API, graphqlOperation} from 'aws-amplify'

import "@fontsource/rubik"
import ItemList from '@components/Item/ItemList'


export default function Home() {
  const [visited, setVisited] = useState([])

  const fetchLocations = async () => {
    const locationData = await API.graphql(graphqlOperation(
      listLocations,
      {
        filter: {
          approval: {eq: "approved"}
        }
      }
    ))

    setVisited(locationData.data.listLocations.items)
  }

  useEffect(()=>{
    fetchLocations()
  }, [])

  return (
    <div className={styles.container}>
      {/* {locations.map((item)=><h1>{item.createdAt}</h1>)} */}
      {/* <Navigation/> */}
      <AuthNavigation/>
      <Hero/>
      <SearchBox/>
      <TopCategories/>
      <ItemList
        title="Most Visited"
        items = {visited}
      />
      <ItemList
        title="Recommended"
        items = {visited}
      />
      <Footer/>
    </div>
  )
}
