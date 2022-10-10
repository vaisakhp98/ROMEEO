
export default function adminNewUsers(props) {

    return (
      <div className="adminNewHotelMain">
          <h2>New Users</h2>
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
            props.adminNewUser.map((item,key)=>
        <div key={item} className='adminNewHotelMainContainer'>
          <div className='adminNewHotelMainContent'>
              <div className='adminNewHotelMainContentImage'>Image</div>
              <div className='adminNewHotelMainContentDetails'>
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Name :</p>
                      <h4>{item.userName}</h4>
                  </div>
  
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Location :</p>
                      <h4>{item.location}</h4>
                  </div>
  
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Phone :</p>
                      <h4>+91 {item.phone}</h4>
                  </div>

                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Address :</p>
                      <h4>{item.address} </h4>
                  </div>

                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>E-mail :</p>
                      <h4> {item.email} </h4>
                  </div>
  
              </div>
              <div className='adminNewHotelMainContentButtons'>
                  <button className="adminNewHotelMainContentButtonsApprove">Approve</button>
                  <button className="adminNewHotelMainContentButtonsView">View</button>
                  <button className="adminNewHotelMainContentButtonsDelete">Delete</button>
              </div>
          </div>
        </div>)}
        
      </div>
    )
  }
  