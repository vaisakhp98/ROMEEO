import Link from 'next/link'
import { useRouter } from 'next/router';
import {RiHotelLine} from 'react-icons/ri'
import {FiUserPlus} from 'react-icons/fi'
import {TbMountain} from 'react-icons/tb'
import {BsEye} from 'react-icons/bs'

export default function HotelAdminTopTiles() {

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
        <li onClick={handleNewHotelBookingsClick} className='adminTopTilesli1'>
          <div className='adminTopTilesliLeft'>
            <RiHotelLine/>
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>
                <h1>53</h1>
              </div>
              <div>New Bookings</div>
            </div>
            
          </div>
        </li>
        <li onClick={handlehotelCancelationClick} className='adminTopTilesli2'>
          <div className='adminTopTilesliLeft'>
            <FiUserPlus/>
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>
                <h1>
                  554
                </h1>
              </div>
              <div>New Canceleation</div>
            </div>
            
          </div>
        </li>
        <li onClick={handlehotelCheckedInClick} className='adminTopTilesli3'>
          <div className='adminTopTilesliLeft'>
            <TbMountain/>
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>
                <h1>3</h1>
              </div>
              <div>Checked In</div>
            </div>
            
          </div>
        </li>
        <li onClick={handlehotelCheckedOutClick} className='adminTopTilesli4'>
          <div className='adminTopTilesliLeft'>
            <BsEye/>
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>
                <h1>94</h1></div>
              <div>Checked Out</div>
            </div>
            
          </div>
        </li>
      </ul>
    </div>
  )
}
