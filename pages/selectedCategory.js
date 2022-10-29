import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import CategoryTile from '../components/categoryTile'
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function SelectedCategory() {

  const [selectedCategory, setSelectedCategory]=useState([])
  useEffect(()=>{
    axios.get('/api/selectedCategory')
    .then((res)=>{setSelectedCategory(res.data)})
    .catch((err)=>console.log("An error has occured in recommended"))
  },[])

  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <CategoryTile 
        selectedCategory = {selectedCategory}
      />
      <Footer/>
    </div>
  )
}
