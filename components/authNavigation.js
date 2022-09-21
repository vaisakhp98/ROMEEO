import Link from 'next/link'
import { useRouter } from 'next/router';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { useState } from 'react';

export default function AuthNavigation() {

 

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
                
                <button onClick={handleProfileClick} className="navProfileButton"><MdOutlineAccountCircle/></button>
                <button className="navProfileButton"><BiLogOutCircle/></button>
            </div>
            
         </div>
      </div>
    </div>
  )
}
