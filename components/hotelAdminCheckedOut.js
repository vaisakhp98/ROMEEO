import {AiOutlineDashboard} from 'react-icons/ai'
import { useRouter } from 'next/router'

export default function hotelAdminCheckedOut(props) {
  const router = useRouter()
  const handleDashClick = (e)=>{
      e.preventDefault()
      router.push('/hotelIndex')
  }
    return (
      <div className="hotelAdminNewBookingsMain">
          <h2>New Checked Out</h2>
         
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
           props.hotelAdminCheckedOut.map((item,key)=> 
        <div key={item} className='adminNewHotelMainContainer'>
          <div className='adminNewHotelMainContent'>
              <div className='adminNewHotelMainContentImage'>Image</div>
                <div className='hotelAdminMainContentDetails'>
                    <div>
                        <p>Booked By :</p>
                        <h4>{item.userName}</h4>
                    </div>
    
                        <div>
                            <p>Phone :</p>
                            <h4>+91 {item.phone}</h4>
                        </div>

                        <div>
                            <p>Email :</p>
                            <h4>{item.email}</h4>
                        </div>

                    </div>

                    <div className="hotelAdminNewBookingsDetails">
                        <div> Booked on : {item.bookedon} </div>
                        <div> Rooms  : {item.rooms} </div>
                        <div> Check in : {item.cinDate} </div>
                        <div> Check out : {item.coutDate}</div>
                    </div>

              <div className='adminNewHotelMainContentButtons'>
                  <button className="adminNewHotelMainContentButtonsApprove"> Completed</button>
                  <button className="adminNewHotelMainContentButtonsOk">OK</button>
              </div>

              
          </div>
          
          <div>
            <h3>Issued room : {item.issuedRoom} </h3>
            <h4>{item.cinDate} - {item.coutDate} </h4>
          </div>
  
        </div>)}
        
      </div>
    )
  }
  