import Link from 'next/link'
import { useRouter } from 'next/router';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useContext, useState } from 'react';


import '@aws-amplify/ui-react/styles.css';
import {Authenticator} from '@aws-amplify/ui-react'

import "@fontsource/rubik"
import { Auth } from 'aws-amplify';
import { UserContext } from '@lib/context/authContext';


export default function AuthNavigation() {
  const router = useRouter()

  const handleProfileClick = (e)=>{
      e.preventDefault()
      router.push('/profile')
  }

  const context = useContext(UserContext)

  const Logout = (e) => {
    e.preventDefault()

    Auth.signOut()
  }

  return (
    <div className="navMain"  style={{fontFamily:'rubik',fontWeight:300}}>
      <Link href="/">
      <div className="navLeft"> <b>ROMEEO</b> </div>
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

                {context.user?.name && <h3 className='navAuthName'>{context.user.name}</h3>}
                
                <button onClick={handleProfileClick} className="navProfileButton"><AiOutlinePlusCircle/></button>
                <button onClick={handleProfileClick} className="navProfileButton"><MdOutlineAccountCircle/></button>
             
                {
                context.user ? 
                  <button className="navProfileButton" onClick={Logout}> <BiLogOutCircle/></button>
                  :
                  <Link href="/profile"><a className="navProfileButton"> <BiLogInCircle/></a></Link>
                }
              
            </div>
            
         </div>
      </div>
    </div>
  )
}
