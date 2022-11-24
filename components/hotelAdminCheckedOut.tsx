import {AiOutlineDashboard} from 'react-icons/ai'
import { useRouter } from 'next/router'
import { THotel, THotelBooking } from "@lib/types/hotel"


export default function HotelAdminCheckedOut(props) {
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
          !props.hotels ? "No bookings yet"
          :
           props.hotels.map((item: THotelBooking, key)=> 
        <div key={key} className='adminNewHotelMainContainer'>
          <div className='adminNewHotelMainContent'>
              {/* <div className='adminNewHotelMainContentImage'>Image</div> */}
                <div className='hotelAdminMainContentDetails'>
                    <div>
                        <p>Booked By :</p>
                        <h4>{item.name}</h4>
                    </div>
    
                        <div>
                            <p>Phone :</p>
                            <h4>+91 {item.phone_number}</h4>
                        </div>

                        <div>
                            <p>Email :</p>
                            <h4>{item.email}</h4>
                        </div>

                    </div>

                    <div className="hotelAdminNewBookingsDetails">
                        <div> Booked on : {new Date(item.createdAt).toISOString().split('T')[0]} </div>
                        <div> Rooms  : {item.rooms} </div>
                        <div> Check in : {item.checkIn} </div>
                        <div> Check out : {item.checkOut}</div>
                    </div>

              <div className='adminNewHotelMainContentButtons'>
                  <button className="adminNewHotelMainContentButtonsApprove"> Completed</button>
                  <button className="adminNewHotelMainContentButtonsOk">OK</button>
              </div>

              
          </div>
          
          <div className="px-3">
            <h4>{item.checkIn} - {item.checkOut} </h4>
          </div>
  
        </div>)}
        
      </div>
    )
  }
  