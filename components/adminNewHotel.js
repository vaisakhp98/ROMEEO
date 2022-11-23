import {MdIosShare , MdOutlinePool ,MdLocalParking ,MdSmokingRooms} from 'react-icons/md'
import {AiFillHeart , AiFillInfoCircle ,AiFillCar,AiOutlineDashboard} from 'react-icons/ai'
import {FaHotTub} from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function AdminNewHotel(props) {

    const router = useRouter()
    const handleDashClick = (e)=>{
        e.preventDefault()
        router.push('/adminIndex')
    }

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

        <div>
            <button onClick={handleDashClick} className="goToDashBoardButton"><AiOutlineDashboard className='dashboardIcon'/> Dashboard</button>
          </div>
          
        
      </div>
        {
            props.hotels.map((item,key)=>
      <div key={key} className='adminNewHotelMainContainer'>
        
        <div  className='adminNewHotelMainContent'>
       
            <div  className='adminNewHotelMainContentImage'>Image</div>
            <div className='adminNewHotelMainContentDetails'>
                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Name :</p>
                    <h4>{item.name}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Location :</p>
                    <h4>{item.district}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Description :</p>
                    <h4>{item.desciption}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Max :</p>
                    <h4>{item.max}</h4>
                </div>

                {/* <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Total Rooms :</p>
                    <h4>{item.totalRooms}</h4>
                </div>

                <div className='adminNewHotelMainContentDetailsDetail'>
                    <p>Type of Rooms :</p>
                    <h4>{item.typeofRooms}</h4>
                </div> */}

            </div>
            <div className='adminNewHotelMainContentButtons'>
                <button data-key={key} data-itemid={item.id} data-approval={item.approval} className='adminNewHotelMainContentButtonsApprove' onClick={props.handleApproval}>{(item.approval == "approved") ? "Disapprove" : "Approve"}</button>
                <Link href={`/hotel/${item.id}`} passHref><a target="_blank" className='adminNewHotelMainContentButtonsView text-center' >View</a></Link>
                <button  data-key={key} data-itemid={item.id} data-approval={item.approval}  className='adminNewHotelMainContentButtonsDelete' onClick={props.handleDelete}>Delete</button>
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
            <h4>Posted By : {item.userId}</h4>
        </div>

      </div>)}
      
    </div>
  )
}
