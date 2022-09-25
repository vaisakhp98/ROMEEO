import AdminNav from '../components/adminNav'
import HotelAdminCancelations from '../components/hotelAdminCancelations'

export default function hotelCancelations() {
  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HotelAdminCancelations/>
    </div>
  )
}
