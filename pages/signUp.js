import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Navigation from '../components/Navigation'
import SignUp from '../components/signUp'
import { AuthProvider } from '../contexts/authContext'



export default function signUp() {
  return (
    <AuthProvider>
        <div className={styles.container}>
          <Navigation/>
        <SignUp/>
        <Footer/>
      </div>
    </AuthProvider>
    
  )
}
