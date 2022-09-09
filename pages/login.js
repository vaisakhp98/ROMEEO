import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Login from '../components/login'
import Navigation from '../components/Navigation'


export default function hotelsList() {
  return (
    <div className={styles.container}>
        <Navigation/>
      <Login/>
      <Footer/>
    </div>
  )
}
