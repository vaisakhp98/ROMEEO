import {MdIosShare , MdOutlinePool ,MdLocalParking ,MdSmokingRooms} from 'react-icons/md'
import {AiFillHeart , AiFillInfoCircle ,AiFillCar} from 'react-icons/ai'
import {FaHotTub} from 'react-icons/fa'


export default function adminNewHotel(props) {

  return (
    <div className="adminNewHotelMain">
        <h2>New Hotels</h2>
      <div className='adminNewHotelSortButton'>
        <div>
            <select name="cars" id="cars">
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="ThisWeek">This Week</option>
                <option value="ThisMonth">This Month</option>
            </select>
        </div>
        
      </div>
        {
            props.adminNewHotel.map((item,key)=>
      <div className='adminNewHotelMainContainer'>
        
        <div  className='adminNewHotelMainContent'>
       
            <div key={item} className='adminNewHotelMainContentImage'>Image</div>
            <div className='adminNewHotelMainContentDetails'>
                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Name :</p>
                    <h4>{item.hotelName}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Location :</p>
                    <h4>{item.location}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Description :</p>
                    <h4>{item.description}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Total Rooms :</p>
                    <h4>{item.totalRooms}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Type of Rooms :</p>
                    <h4>{item.typeofRooms}</h4>
                </div>

            </div>
            <div className='adminNewHotelMainContentButtons'>
                <button className='adminNewHotelMainContentButtonsApprove'>Approve</button>
                <button className='adminNewHotelMainContentButtonsView'>View</button>
                <button className='adminNewHotelMainContentButtonsDelete'>Delete</button>
            </div>
        </div>
        <div className='adminNewHotelTagsMain'>
            <div className='adminNewHotelTags'>
                <div className='adminNewHotelTagsTag'>
                   <div><MdOutlinePool/></div>
                   <div>Pool </div>
                </div> 
            </div>

            <div className='adminNewHotelTags'>
                <div className='adminNewHotelTagsTag'>
                   <div><MdLocalParking/></div>
                   <div>Parking </div>
                </div> 
            </div>

            <div className='adminNewHotelTags'>
                <div className='adminNewHotelTagsTag'>
                   <div><MdSmokingRooms/></div>
                   <div>Smoking Room </div>
                </div> 
            </div>

            <div className='adminNewHotelTags'>
                <div className='adminNewHotelTagsTag'>
                   <div className='adminNewHotelTagsTagIcon'><FaHotTub/></div>
                   <div className='adminNewHotelTagsTagTitle'>Hot Water </div>
                </div> 
            </div>
            
        </div>
        <div className='adminNewHotelPostedBy'> 
            <h4>Posted By : {item.postedBy}</h4>
        </div>

      </div>)}
      
    </div>
  )
}
