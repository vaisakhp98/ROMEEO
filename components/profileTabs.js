import { useState } from "react";


const Tabs=()=> {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          User Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Bookings
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Hello User</h2>
          <hr />
          <div className="tabsContentUserDetails">
            <div className="tabsContentUserDetailsImage">
              Image
            </div>
            
            <div className="tabsContentUserMainDetails">
              <div>
                <div className="tabsContentUserMainDetailsInformation">
                  <h5>User Name : </h5>
                    <div className="tabsContentUserMainDetailsInformation-flex">
                      <h4>Vaisakh MV</h4>
                      <button className="tabsContentUserMainDetailsInformation-button">edit</button>
                    </div>
                </div>
                <div className="tabsContentUserMainDetailsInformation">
                <h5>Email : </h5>
                    <div className="tabsContentUserMainDetailsInformation-flex">
                      <h4>Vaisakhp43@gmail.com</h4>
                      <button className="tabsContentUserMainDetailsInformation-button">edit</button>
                    </div>
                </div>
                <div className="tabsContentUserMainDetailsInformation">
                <h5>phone : </h5>
                    <div className="tabsContentUserMainDetailsInformation-flex">
                      <h4>+91 65201 45893</h4>
                      <button className="tabsContentUserMainDetailsInformation-button">edit</button>
                    </div>
                </div>
                <div className="tabsContentUserMainDetailsInformation">
                <h5>Address : </h5>
                    <div className="tabsContentUserMainDetailsInformation-flex">
                      <h4>Lorem Ipsum road , septum strret 544 , building 52 , room 63</h4>
                      <button className="tabsContentUserMainDetailsInformation-button">edit</button>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Your Bookings</h2>
          <hr />
          {[...Array(2)].map((e,i)=> 
          <div className="tabsContentBookingsSection">
            <div className="tabsContentBookingsMain">
              <div className="tabsContentBookingsMain-Image">Image</div>
              <div className="tabsContentBookingsMain-Details">
                <div>
                  <p>Hotel Name</p>
                  <h4>Vishwas Nagar</h4>
                </div>
                <div>
                  <p>Location</p>
                  <h4>Munnar</h4>
                </div>
                <div>Date and Room</div>
              </div>
              <div className="tabsContentBookingsMain-Buttons">
                <button>View Hotel</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
          )}
          
        </div>
        
      </div>
    </div>
  );
}

export default Tabs;