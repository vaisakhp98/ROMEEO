import AdminNav from '../components/adminNav'
import HotelAdminNewBookings from '../components/hotelAdminNewBookings'

export default function hotelNewBookings() {
  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HotelAdminNewBookings/>
    </div>
  )
}
