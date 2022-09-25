import Link from 'next/link'
import { useRouter } from 'next/router';


export default function hotelAdminTopTiles() {

  const router = useRouter()

  const handleNewHotelBookingsClick = (e)=>{
      e.preventDefault()
      router.push('/hotelNewBookings')
  }

  const handlehotelCancelationClick = (e)=>{
      e.preventDefault()
      router.push('/hotelCancelations')
  }

  const handlehotelCheckedInClick = (e)=>{
      e.preventDefault()
      router.push('/hotelCheckedIn')
  }

  const handlehotelCheckedOutClick = (e)=>{
    e.preventDefault()
    router.push('/hotelCheckedOut')
}


  return (
    <div className="adminTopTiles">
      <h3 className='adminTopTilesQuickinfo'>Quick Info</h3>
      <ul className='adminTopTilesUl'>
        <li onClick={handleNewHotelBookingsClick} className='adminTopTilesli'>
          <div className='adminTopTilesliLeft'>
            icon
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>54</div>
              <div>New Bookings</div>
            </div>
            
          </div>
        </li>
        <li onClick={handlehotelCancelationClick} className='adminTopTilesli'>
          <div className='adminTopTilesliLeft'>
            icon
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>554</div>
              <div>Cancelations</div>
            </div>
            
          </div>
        </li>
        <li onClick={handlehotelCheckedInClick} className='adminTopTilesli'>
          <div className='adminTopTilesliLeft'>
            icon
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>554</div>
              <div>Checked In</div>
            </div>
            
          </div>
        </li>
        <li onClick={handlehotelCheckedOutClick} className='adminTopTilesli'>
          <div className='adminTopTilesliLeft'>
            icon
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>554</div>
              <div>Checked out</div>
            </div>
            
          </div>
        </li>
      </ul>
    </div>
  )
}
