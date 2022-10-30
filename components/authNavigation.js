import Link from 'next/link'
import { useRouter } from 'next/router';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';


// import '@aws-amplify/ui-react/style.css' 
import {Authenticator} from '@aws-amplify/ui-react'

import "@fontsource/rubik"


export default function AuthNavigation() {

 

  const router = useRouter()

  const handleProfileClick = (e)=>{
      e.preventDefault()
      router.push('/profile')
  }

  return (
    
    <div className="navMain"  style={{fontFamily:'rubik',fontWeight:300}}>
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
                
                <button onClick={handleProfileClick} className="navProfileButton"><AiOutlinePlusCircle/></button>
                <button onClick={handleProfileClick} className="navProfileButton"><MdOutlineAccountCircle/></button>
                <Authenticator loginMechanism = {['email']}  >
                  {({signOut,user})=>(
                  <button className="navProfileButton" onClick={signOut}> <BiLogOutCircle/></button>
                  )}
                </Authenticator>
            </div>
            
         </div>
      </div>
    </div>
  )
}
