import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Navigation from '../components/Navigation'
import ProfileTabs from '../components/profileTabs'


export default function profile() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <ProfileTabs/>
      <Footer/>
    </div>
  )
}
