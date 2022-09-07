import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import TopCategories from '../components/topCategories'
import HotelHero from '../components/hotelHero'
import HotelDetails from '../components/hotelDetails'
import HotelReviews from '../components/hotelReviews'





export default function hotel() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <TopCategories/>
      <HotelHero/>
      <HotelDetails/>
      <HotelReviews/>
      
      <Footer/>
    </div>
  )
}
