import Link from 'next/link'
import { useRouter } from 'next/router';


export default function hotelAdminTopTiles() {

  const router = useRouter()

  const handleNewHotelBookingsClick = (e)=>{
      e.preventDefault()
      router.push('/hotelNewBookings')
  }

  const handleNewDestinationClick = (e)=>{
      e.preventDefault()
      router.push('/adminNewDestination')
  }

  const handleNewUserClick = (e)=>{
      e.preventDefault()
      router.push('/adminNewUsers')
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
        <li onClick={handleNewUserClick} className='adminTopTilesli'>
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
        <li onClick={handleNewDestinationClick} className='adminTopTilesli'>
          <div className='adminTopTilesliLeft'>
            icon
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>554</div>
              <div>Check In</div>
            </div>
            
          </div>
        </li>
        <li className='adminTopTilesli'>
          <div className='adminTopTilesliLeft'>
            icon
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>554</div>
              <div>Check out</div>
            </div>
            
          </div>
        </li>
      </ul>
    </div>
  )
}
