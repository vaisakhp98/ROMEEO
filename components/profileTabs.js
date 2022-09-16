import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'


export default function ProfileTabs() {
  
    return (
      <div className='ProfileTabsSection'>
          <div>
            <button>Profile</button>
          </div>

          <div>
          <button>Bookings</button>
          </div>
      </div>
    );
  }

