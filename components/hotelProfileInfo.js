import { useRouter } from "next/router";
import { useState } from "react";

export default function HotelProfileInfo() {

  const[isHidden,setisHidden] = useState(false)

  const router = useRouter()
  const handleClick = (e)=>{
      e.preventDefault()
      router.push('/hotelsList')
  }
      return (
        <div>
            <div>
                <p>Username : </p>
                <h3>Meridian Hotel</h3>
                <button>edit</button>
            </div>

            <div>
                <p>E-mail : </p>
                <h3>meridianhotel@gmail.com</h3>
                <button>edit</button>
            </div>

            <div>
                <p>Phone : </p>
                <h3>+91 3564 02697</h3>
                <button>edit</button>
            </div>

            <div>
            <form className="addDestination">
            <label className="addDestinationLabels">Location Name: </label>
            <input type='text' placeholder="Destination" className="addDestinationInput"/>

            <label className="addDestinationLabels">State : </label>
            <input type='text' placeholder="State" className="addDestinationInput"/>

            <label className="addDestinationLabels">District : </label>
            <input type='text' placeholder="District" className="addDestinationInput"/>

            <label className="addDestinationLabels">Pincode : </label>
            <input type='number' placeholder="Pincode" className="addDestinationInput"/>

            <label className="addDestinationLabels">Description : </label>
            <textarea> </textarea>

            <label className="addDestinationLabels">Number of Rooms : </label>
            <input type='text' className="addDestinationInput"/>

            <label className="addDestinationLabels">Type of Rooms : </label>
                <label> AC </label>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>

                <label> non-AC </label>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>

            <label className="addDestinationLabels">Facilities : </label>
            <input type='text' placeholder="Facilities" className="addDestinationInput"/>


            <div className="addDestinationTagsMain">
              <div className="addDestinationTags">
                <div>Facilities</div>
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
            

            
            
            
        </div>
      );
    }
  
  