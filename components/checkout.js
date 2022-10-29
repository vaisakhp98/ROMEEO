
export default function Checkout() {
  
    const completed =()=>{
        alert("Payment completed")
    }

      return (
        <div className="checkoutSection" style={{fontFamily:'rubik',fontWeight:300}}>
            <div className="checkoutContainer">
            <div className="checkoutContainerImage">
                Image
            </div>
            

            <div className="checkoutContainerHotelName">
                
                <h2><b>Meridian</b></h2>
                <b>Munnar</b>
                <hr/>
            </div>

            <div className="checkoutContainerDateandTimeSection">
                <div className="checkoutContainerDateandTime">
                    
                    <div>
                        <h4>Check-In</h4>
                        <h1>24</h1>
                        <h4>Friday,</h4>
                        <p>July 2022 </p>
                        
                        <input type="date" id="birthday" name="birthday" className="datePicker"/>

                        
                    </div>
                 
                    
                    
                </div>

                <div className="checkoutContainerDateandTime-checkOut">
                    
                <div>
                        <h4>Check-Out</h4>
                        <h1>24</h1>
                        <h4>Friday,</h4>
                        <p>July 2022 </p>
                        <input type="date" id="birthday" name="birthday" className="datePicker"/>
                       
                    </div>
                    
                </div>
                
            </div>

            <div className="roomDetails">
                <hr/>
                <h4>Room Details</h4>
                <h3>2 Rooms</h3>
                <h4>A/C Rooms</h4>

                <button className="changeButton">Change</button>
            </div>

            <div className="guestDetails">
                <hr/>
                <h4>Name of Guest :</h4>
                <p>Nikhil</p>

                <h4>Phone:</h4>
                <p>+91 12544 86521 </p>

                <h4>E-mail :</h4>
                <p>Nikhil@gamil.com</p>
            </div>

            <div className="cashDetails">
                <hr/>
                <h4>Room Price :</h4>
                <p>4300 Rs</p>

                <h4>+TAX :</h4>
                <p>4300 Rs</p>

                <h4>+Convinenece :</h4>
                <p>4300 Rs</p>
                <hr/>
                <h2>Total Payment - 4500 Rs</h2>
            </div>

            <div className="paymentType">
                <hr/>
                <hr/>
                <h4>Payment type :</h4>
                <div className="paymentMethodSection">
                    <div className="paymentMethodDivs">
                        <label>UPI</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                    </div>
                    
                    
                    <div className="paymentMethodDivs">
                        <label>Net Banking</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                    </div>

                    <div className="paymentMethodDivs">
                        <label>Google Pay</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                    </div>

                </div>
            </div>

            <div className="checkoutSubmit">
                <hr/>
                <div>
                        <label>I agree to all Terms and Conditions :</label>
                        <input type="checkbox" id="html" name="fav_language" value="HTML"/>
                </div>
                <div className="payNowButtonDiv">
                    <button onClick={completed} className="payNowButton">Pay Now</button>
                </div>
            </div>
        </div>      
        </div>
        
      );
    }
  
  