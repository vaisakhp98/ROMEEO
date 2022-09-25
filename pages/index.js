import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import SearchBox from '../components/SearchBox'
import TopCategories from '../components/topCategories'
import MostVisited from '../components/mostVisited'
import RecommendedHome from '../components/recommendedHome'
import Footer from '../components/footer'
import AuthNavigation from '../components/authNavigation'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navigation/> */}
      <AuthNavigation/>
      <Hero/>
      <SearchBox/>
      <TopCategories/>
      <MostVisited/>
      <RecommendedHome/>
      <Footer/>
    </div>
  )
}
