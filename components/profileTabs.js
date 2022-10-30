import { useState } from "react";
import { useRouter } from 'next/router';
import { createLocation } from "../graphql/mutations";
import {API, Auth , currentUserInfo} from 'aws-amplify'


const Tabs=(props)=> {
  const [name,setName] = useState( " ")
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const router = useRouter()

    const handleviewHotelClick = (e)=>{
        e.preventDefault()
        router.push('/hotel')
    }

    const addLocation = async () => {
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: createLocation ,
        variables : {input:{name:name}}
      })
    }

    const destinationSubmitted=(e)=>{
      e.preventDefault()
      alert("Your destination has been submitted")
      addLocation()
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
    const getUser = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser()
      console.log(attributes) 
    }
    getUser()

    
      
  

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
                <div>
                  <div>
                    Check In :
                    <p>{item.cindate}</p>

                    Check In :
                    <p>{item.coutdate}</p>
                  </div>

                  <div>
                    <b>Room Details :</b>
                    <div>
                      <p>{item.noOfRooms} Room : {item.typeofRoom}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabsContentBookingsMain-Buttons">
                <button onClick={handleviewHotelClick}  className="tabsContentBookingsMainViewHotel">View Hotel</button>
                <button onClick={canceledAlert} className="tabsContentBookingsMainCancel">Cancel</button>
              </div>
            </div>
          </div>
          )}
          
        </div>



            {/* <h1>Destinaation Adding</h1> */}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Add Destination</h2>
          <hr />
          <form className="addDestination">
            <label className="addDestinationLabels">Destination Name: </label>
            <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder="Destination" className="addDestinationInput"/>

            <label className="addDestinationLabels">State : </label>
            <input type='text' placeholder="State" className="addDestinationInput"/>

            <label className="addDestinationLabels">District : </label>
            <input type='text' placeholder="District" className="addDestinationInput"/>

            <label className="addDestinationLabels">Pincode : </label>
            <input type='number' placeholder="Pincode" className="addDestinationInput"/>

            <label className="addDestinationLabels">Description : </label>
            <textarea> </textarea>

            <label className="addDestinationLabels">Tags : </label>
            <input type='text' placeholder="Tags" className="addDestinationInput"/>
            <div className="addDestinationTagsMain">
              <div className="addDestinationTags">
                <div>Tags</div>
                <button>X</button>
              </div>
            </div>

            <div className="addDestinationImageAddMain">
              
              <div className="addDestinationImageAdd">
                Image 1
              </div>
              <div className="addDestinationImageAdd">
                2
              </div>
              <div className="addDestinationImageAdd">
                3
              </div>
              <div className="addDestinationImageAdd">
                4
              </div>
            </div>
            
            <button onClick={destinationSubmitted} className="addDestinationSubmitBtn">Submit</button>

          </form> 
        </div>

        {/* <h1>View Locations</h1> */}
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>View Destination</h2>
          <hr />
          {props.profileViewDestination.map((item,key)=> 
          <div key={key} className="tabsContentBookingsSection">
            <div className="tabsContentBookingsMain">
              <div className="tabsContentBookingsMain-Image">Image</div>
              <div className="tabsContentBookingsMain-Details">
                <div className="profileViewDestination">
                  <p>Location Name :</p>
                  <h4>{item.locationName}</h4>
                </div>

                <div className="profileViewDestination">
                  <p>Location :</p>
                  <h4>{item.locationDistrict}</h4>
                </div>

                <div className="profileViewDestination">
                  <p>Discription :</p>
                  <h4>{item.locationDiscription}</h4>
                </div>

                <div className="profileViewDestination">
                  <p>Tags :</p>
                  <h4>#{item.locationTags}</h4>
                </div>
                
              </div>
              <div className="tabsContentBookingsMain-Buttons">
                <button onClick={handleviewHotelClick}  className="tabsContentBookingsMainViewHotel">Edit</button>
                <button onClick={deletedAlert} className="tabsContentBookingsMainCancel">Delete</button>
              </div>
            </div>
          </div>
          )}
          
          
          
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
        
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
          )}
          
          
          
        </div>
      </div>

      
    </div>
  );
}

export default Tabs;