import AdminNav from '../components/adminNav'
import AdminNewUsers from '../components/adminNewUsers'

export default function adminIndex() {
  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminNewUsers/>
    </div>
  )
}
