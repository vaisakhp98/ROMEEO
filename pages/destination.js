import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import DestHero from '../components/destHero'
import TopCategories from '../components/topCategories'
import DestDetails from '../components/destDetails'
import DestReviews from '../components/destReviews'



export default function destination() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <TopCategories/>
      <DestHero/>
      <DestDetails/>
      <DestReviews/>
      <Footer/>
    </div>
  )
}
