
export default function hotelAdminCheckedOut() {

    return (
      <div className="hotelAdminNewBookingsMain">
          Checked Out
        <div className='adminNewHotelSortButton'>
          <div>
              icon
          </div>
          <div>
              <button>Sort</button>
          </div>
        </div>
        {
            [...Array(6)].map((e,i)=> 
        <div className='adminNewHotelMainContainer'>
          <div className='adminNewHotelMainContent'>
              <div className='adminNewHotelMainContentImage'>Image</div>
                <div className='hotelAdminMainContentDetails'>
                    <div>
                        <p>Booked By :</p>
                        <h4>Rahul Mehta</h4>
                    </div>
    
                        <div>
                            <p>Phone :</p>
                            <h4>+91 52369 45120</h4>
                        </div>

                        <div>
                            <p>Email :</p>
                            <h4>rahulMehta94@gmail.com</h4>
                        </div>

                    </div>

                    <div className="hotelAdminNewBookingsDetails">
                        <div> Booked on : 15/06/2022 </div>
                        <div> Rooms  : 2 </div>
                        <div> Check in : 17/06/2022 </div>
                        <div> Check out : 19/06/2022</div>
                    </div>

              <div className='adminNewHotelMainContentButtons'>
                  <button>Completed</button>
                  <button>OK</button>
              </div>

              
          </div>
          
          <div>
            <h3>Issued room : 203 </h3>
            <h4>05/06/2022 - 07/06/2022 </h4>
          </div>
  
        </div>)}
        
      </div>
    )
  }
  