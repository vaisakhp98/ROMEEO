import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import SearchBox2 from '../components/SearchBox2'
import Footer from '../components/footer'
import CategoryTile from '../components/categoryTile'

export default function selectedCategory() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <SearchBox2/>
      <CategoryTile/>
      <Footer/>
    </div>
  )
}
