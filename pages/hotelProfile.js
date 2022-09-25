import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import AdminNav from '../components/adminNav'
import HotelProfileInfo from '../components/hotelProfileInfo'


export default function hotelProfile() {
  return (
    <div className={styles.container}>
      <AdminNav/>
      <HotelProfileInfo/>
      <Footer/>
    </div>
  )
}
