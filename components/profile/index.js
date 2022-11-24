import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { createLocation } from "../../graphql/mutations";
import { getLocation, listLocations } from "../../graphql/queries";

import {API, Auth , currentUserInfo} from 'aws-amplify'
import AddDestination from "./addDestination";
import ViewDestination from "./viewDestination";
import Profile from "./profile";
import LikedLocations from "./LikedLocations";
import HotelBookings from './HotelBookings'


Auth.updateUserAttributes
const Tabs=(props)=> {
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const router = useRouter()

    const handleviewHotelClick = (e)=>{
        e.preventDefault()
        router.push('/hotel')
    }

    const canceledAlert=()=>{
      alert("Your Reservation has been canceled")
    }

    const removedAlert=()=>{
      alert("Your item has been removed")
    }

    const deletedAlert=()=>{
      alert("Your item has been Deleted")
    }
    

   
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
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Add Destination
        </button>

        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          View Destination
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Liked List
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Profile/>

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {toggleState === 2 && <HotelBookings/>}
        </div>



            {/* <h1>Destinaation Adding</h1> */}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <AddDestination
            toggleTab = {toggleTab}
          />
        </div>

        {/* <h1>View Locations</h1> */}
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          {
            toggleState === 4 &&
            <ViewDestination
              toggleState = {toggleState}
            />
          }
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
           {
            toggleState === 5 &&
          <LikedLocations
            toggleState = {toggleState}
          />
           }
{/*         
          {props.profileBookings.map((item,key)=> 
          
          <div key={key} className="tabsContentBookingsSection">
            <div className="tabsContentBookingsMain">
              <div className="tabsContentBookingsMain-Image">Image</div>
              <div className="tabsContentBookingsMain-Details">
                <div>
                  <p>Hotel Name :</p>
                  <h4>{item.hotelName}</h4>
                </div>
                <div>
                  <p>Location</p>
                  <h4>{item.hotelLocation}</h4>
                </div>
              </div>
              <div className="tabsContentBookingsMain-Buttons">
                <button onClick={handleviewHotelClick}  className="tabsContentBookingsMainViewHotel">Book Hotel</button>
                <button onClick={removedAlert} className="tabsContentBookingsMainCancel">Remove</button>
              </div>
            </div>
          </div>
          )} */}
          
          
          
        </div>
      </div>

      
    </div>
  );
}

export default Tabs;