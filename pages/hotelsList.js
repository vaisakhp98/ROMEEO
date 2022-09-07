import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import HotelsListTile from '../components/hotelsListTile'

export default function hotelsList() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <HotelsListTile/>
      <Footer/>
    </div>
  )
}
