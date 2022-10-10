import {MdFamilyRestroom , MdOutlinePool ,MdLocalParking ,MdSmokingRooms} from 'react-icons/md'
import {AiFillHeart , AiFillInfoCircle ,AiFillCar} from 'react-icons/ai'
import {FaMountain} from 'react-icons/fa'
import {GiSkier} from 'react-icons/gi'

export default function adminNewDestination(props) {

    return (
      <div className="adminNewHotelMain">
        <h2>New Destination</h2>
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
            props.adminNewDestination.map((item,key)=>
        <div key={item} className='adminNewHotelMainContainer'>
          <div className='adminNewHotelMainContent'>
              <div className='adminNewHotelMainContentImage'>Image</div>
              <div className='adminNewHotelMainContentDetails'>
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Name :</p>
                      <h4>{item.locationName}</h4>
                  </div>
  
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Location :</p>
                      <h4>{item.locationDistrict}</h4>
                  </div>
  
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Description :</p>
                      <h4>{item.description}</h4>
                  </div>
  
              </div>
              <div className='adminNewHotelMainContentButtons'>
                  <button className = 'adminNewHotelMainContentButtonsApprove'>'Approve</button>
                  <button className='adminNewHotelMainContentButtonsView'>View</button>
                  <button className='adminNewHotelMainContentButtonsDelete'>Delete</button>
              </div>
          </div>

          
            <div className='adminNewHotelMainTags'>
                
                <div className='adminNewHotelTags'>
                    <div className='adminNewHotelTagsTag'>
                    <div><GiSkier/></div>
                    <div>Sking </div>
                    </div> 
                </div>

                <div className='adminNewHotelTags'>
                    <div className='adminNewHotelTagsTag'>
                    <div><MdFamilyRestroom/></div>
                    <div>Family </div>
                    </div> 
                </div>

                <div className='adminNewHotelTags'>
                    <div className='adminNewHotelTagsTag'>
                    <div><FaMountain/></div>
                    <div>Sight Seeing</div>
                    </div> 
                </div>

                

            </div>

          
          <div className='adminNewHotelPostedBy'> 
              <h4>postedBy : {item.postedBy}</h4>
          </div>
        </div>)} 
      </div>
    )
  }
  