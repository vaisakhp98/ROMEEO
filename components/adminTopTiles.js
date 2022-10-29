import Link from 'next/link'
import { useRouter } from 'next/router';
import {RiHotelLine} from 'react-icons/ri'
import {FiUserPlus} from 'react-icons/fi'
import {TbMountain} from 'react-icons/tb'
import {BsEye} from 'react-icons/bs'


export default function AdminTopTiles() {

  const router = useRouter()

  const handleNewHotelsClick = (e)=>{
      e.preventDefault()
      router.push('/adminNewHotels')
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
        <li onClick={handleNewHotelsClick} className='adminTopTilesli1'>
          <div className='adminTopTilesliLeft'>
            <RiHotelLine/>
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>
                <h1>53</h1>
              </div>
              <div>New Hotels</div>
            </div>
            
          </div>
        </li>
        <li onClick={handleNewUserClick} className='adminTopTilesli2'>
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
              <div>New Users</div>
            </div>
            
          </div>
        </li>
        <li onClick={handleNewDestinationClick} className='adminTopTilesli3'>
          <div className='adminTopTilesliLeft'>
            <TbMountain/>
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>
                <h1>3</h1>
              </div>
              <div>New Destination</div>
            </div>
            
          </div>
        </li>
        <li className='adminTopTilesli4'>
          <div className='adminTopTilesliLeft'>
            <BsEye/>
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>
                <h1>94</h1></div>
              <div>Visits</div>
            </div>
            
          </div>
        </li>
      </ul>
    </div>
  )
}
