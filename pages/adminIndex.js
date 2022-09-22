import AdminNav from '../components/adminNav'
import styles from '../styles/Home.module.css'
import AdminTopTiles from '../components/adminTopTiles'

export default function adminIndex() {
  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminTopTiles/>
    </div>
  )
}
