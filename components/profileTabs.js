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


        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Add Destination</h2>
          <hr />
          <form className="addDestination">
            <label className="addDestinationLabels">Destination Name: </label>
            <input type='text' placeholder="Destination" className="addDestinationInput"/>

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
            
            <button className="addDestinationSubmitBtn">Submit</button>

          </form>
          
          
        </div>



        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>View Your Destination</h2>
          <hr />
          
          
          
        </div>


      </div>

      
    </div>
  );
}

export default Tabs;