import AdminNav from '../components/adminNav'
import HotelAdminTopTiles from '../components/hotelAdminTopTiles'

export default function hotelIndex() {
  return (
    <div className='adminIndex'>
      <AdminNav/>
      <HotelAdminTopTiles/>
    </div>
  )
}
