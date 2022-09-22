import Link from 'next/link'
import { useRouter } from 'next/router';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

export default function adminNav() {

  return (
    <div className="navMain">
      <Link href="/">
      <div className="navLeft"> Logo </div>
      </Link>
      <div className="navRight">
         <div className='adminNavSearch'> 
          <input className='adminNavSearchInput' type='text' placeholder='Search here'/>
          <button className='adminNavSearchButton' ><AiOutlineSearch/></button>
           </div>
         <div> 
            <div className='navAuthNameandIcon'>
                <h3 className='navAuthName'>Vaisakh M V</h3>
                
                <button  className="navProfileButton"><MdOutlineAccountCircle/></button>
                <button className="navProfileButton"><BiLogOutCircle/></button>
            </div>
            
         </div>
      </div>
      
    </div>
  )
}
