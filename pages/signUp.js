import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Navigation from '../components/Navigation'
import SignUp from '../components/signUp'


export default function signUp() {
  return (
    <div className={styles.container}>
        <Navigation/>
      <SignUp/>
      <Footer/>
    </div>
  )
}
