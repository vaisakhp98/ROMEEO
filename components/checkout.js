import { ImLocation } from "react-icons/im";
import { FcSimCardChip } from "react-icons/fc";
import { AiTwotoneBank } from "react-icons/ai";
import { FaGooglePay } from "react-icons/fa";



export default function Checkout() {
  
    const completed =()=>{
        alert("Payment completed")
    }

      return (
        <div className="checkoutSection" style={{fontFamily:'rubik',fontWeight:300}}>
            <div className="checkoutContainer">
            <div className="checkoutContainerImage">
                <img className="checkoutContainerImageImage" src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg" alt="Hotel Image" width="800" height="200"/>
            </div>
            

            <div className="checkoutContainerHotelName">
            <h4 className="text-xl font-bold"> Hotel Name :</h4>
                
                <h2 className="text-lg"><b>Meridian</b></h2>
                <div > 
                <b className="flex items-center text-gray-500"><ImLocation/>Munnar</b>
                </div>
                
                <hr/>
            </div>

            <div className="checkoutContainerDateandTimeSection">
                <div className="checkoutContainerDateandTime">
                    
                    <div>
                        <h4 className="text-gray-500">Check-In : </h4>
                        <h1 className="text-3xl">24</h1>
                        <h4>Friday,</h4>
                        <p>July 2022 </p>
                        
                        <input type="date" id="birthday" name="birthday" className="datePicker"/>

                        
                    </div>
                 
                    
                    
                </div>

                <div className="checkoutContainerDateandTime-checkOut">
                    
                <div>
                        <h4 className="text-gray-500">Check-Out :</h4>
                        <h1 className="text-3xl">28</h1>
                        <h4>Tuesday,</h4>
                        <p>July 2022 </p>
                        <input type="date" id="birthday" name="birthday" className="datePicker"/>
                       
                    </div>
                    
                </div>
                
            </div>

            <div className="roomDetails">
                <hr/>
                <h4 className="text-xl"> Room Details :</h4>
             
                
                    <label for="cars" className="text-gray-500">Choose Number of Rooms:</label>
                    <br/>
                    <select className="p-3 border m-2" name="cars" id="cars">
                        <option value="volvo">1 Room</option>
                        <option value="saab">2 Rooms</option>
                        <option value="opel">3 Rooms</option>
                        <option value="audi">4 Rooms</option>
                    </select>
                    <br/>
                    

                
                <h5 className="text-l text-gray-500">Choose type of Room:</h5>
                    <br/>
                    <select className="p-3 border ml-2 -mt-3" name="cars" id="cars">
                        <option value="volvo">A/C</option>
                        <option value="saab">Non-A/C</option>
                        
                    </select>
                    <br/>

                
            </div>

            <div className="guestDetails">
                <hr/>
                <h4 className="text-xl"> Guest Details :</h4>
                <h4 className="text-l text-gray-500">Name of Guest :</h4>
                <p className="p-3">Nikhil</p>

                <h4 className="text-l text-gray-500">Phone:</h4>
                <p className="p-3">+91 12544 86521 </p>

                <h4 className="text-l text-gray-500">E-mail :</h4>
                <p className="p-3">Nikhil@gamil.com</p>
            </div>

            <div className="cashDetails">
                <hr/>
                <h4 className="text-xl">Room Price :</h4>
                <p>4300 Rs/-</p>

                <h4 className="text-xl mt-2">+TAX :</h4>
                <p>4300 Rs/-</p>

                <h4 className="text-xl mt-2 " >+Convinenece :</h4>
                <p>4300 Rs/-</p>
                <hr/>
                <h2 className="text-2xl mt-2 mb-2 font-bold"  >Total Payment - 12900 Rs /-</h2>
            </div>

            <div className="paymentType">
                <hr/>
                <hr/>
                <h4 >Payment type :</h4>
                <div className="paymentMethodSection w-full">
                    <div className="paymentMethodDivs w-full p-2">
                        <div className="flex items-center">
                            <FcSimCardChip className="text-3xl mr-2"/>
                            <label>UPI Payment</label>
                        </div>
                       
                        <input className="" type="radio" id="html" name="fav_language" value="HTML"/>
                    </div>
                    
                    
                    <div className="paymentMethodDivs w-full p-2">
                        <div className="flex items-center">
                            <AiTwotoneBank className="text-3xl mr-2 text-green-600"/>
                            <label>Net Banking</label>
                            
                        </div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                    </div>

                    <div className="paymentMethodDivs w-full p-2">
                        <div className="flex items-center">
                            <FaGooglePay className="text-3xl mr-2 text-red-600"/>
                            <label>Google Pay</label>
                        </div>
                        
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                    </div>

                </div>
            </div>

            <div className="checkoutSubmit">
                <hr/>
                <div className="flex">
                        <input type="checkbox" id="html" name="fav_language" value="HTML"/>
                        <label> : I agree to all Terms and Conditions </label>
                        
                </div>
                <div className="payNowButtonDiv">
                    <button onClick={completed} className="payNowButton">Pay Now</button>
                </div>
            </div>
        </div>      
        </div>
        
      );
    }
  
  