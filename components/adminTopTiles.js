import Link from 'next/link'
import { useRouter } from 'next/router';


export default function adminTopTiles() {

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
        <li onClick={handleNewHotelsClick} className='adminTopTilesli'>
          <div className='adminTopTilesliLeft'>
            icon
          </div>
          <div className='adminTopTilesliRight'>
            <div>
              <div>54</div>
              <div>New Hotels</div>
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
              <div>New Users</div>
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
              <div>New Destination</div>
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
              <div>Visits</div>
            </div>
            
          </div>
        </li>
      </ul>
    </div>
  )
}