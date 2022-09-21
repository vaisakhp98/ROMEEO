import Link from 'next/link'
import { useRouter } from 'next/router';
import { MdAccountCircle } from 'react-icons/md';
import { useState } from 'react';

export default function AuthNavigation() {

  const [isToggled , setIsToggled] = useState(false)

  const router = useRouter()

  const handleProfileClick = (e)=>{
      e.preventDefault()
      router.push('/profile')
  }

  return (
    <div className="navMain">
      <Link href="/">
      <div className="navLeft"> Logo </div>
      </Link>
      <div className="navRight">
         <div className='navLinksSection'> 
          <ul className='navLinksLinks'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
           </div>
         <div> 
            <div className='navAuthNameandIcon'>
                <h3 className='navAuthName'>Vaisakh M V</h3>
                
                <button onClick={handleProfileClick} onMouseEnter={()=> setIsToggled(!isToggled)}  className="navProfileButton"><MdAccountCircle/></button>
            </div>
            {isToggled && 
            <div className='profileIconDropDown'>
                <button className='profileIconDropDownButtons'>Logout</button>
                <button className='profileIconDropDownButtons'>Your Bookings</button>
                <button className='profileIconDropDownButtons'>Help</button>
            </div>
            }
         </div>
      </div>
    </div>
  )
}
