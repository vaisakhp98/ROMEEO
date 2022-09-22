import Link from 'next/link'
import { useRouter } from 'next/router';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

export default function adminTopTiles() {

  return (
    <div className="adminTopTiles">
      <h3 className='adminTopTilesQuickinfo'>Quick Info</h3>
      <ul className='adminTopTilesUl'>
        <li className='adminTopTilesli'>
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
        <li className='adminTopTilesli'>
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
        <li className='adminTopTilesli'>
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
