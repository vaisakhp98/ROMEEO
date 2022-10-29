import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Loginn from '../components/login'
import Navigation from '../components/Navigation'


export default function Login() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <Loginn/>
      <Footer/>
    </div>
  )
}
