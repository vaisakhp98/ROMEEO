import AdminNav from '../components/adminNav'
import AdminNewDestination from '../components/adminNewDestination'

export default function adminIndex() {
  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminNewDestination/>
    </div>
  )
}
