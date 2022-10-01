
export default function checkout() {
  
    const completed =()=>{
        alert("Payment completed")
    }

      return (
        <div className="checkoutContainer">
            <div>
                <h2>Checkout</h2>
                <hr/>
            </div>
            <div className="checkoutContainerMain">
                <div className="checkoutContainerMainImage">Image</div>
                <div className="checkoutContainerMainContent">
                    <div className="checkoutContainerMainContent-HotelDetail">
                        <h3>Meredian Hotel</h3>
                        <h5>Munnar</h5>
                    </div>

                    <div className="checkoutContainerMainContent-Date">
                        <div>
                            <b>CheckIn</b>
                         
                            <div className="checkoutContainerMainContent-DateMain">
                                <div>
                                    <h1>24</h1>
                                </div>
                                <div>
                                    <p>July 2022</p>
                                    <p>Friday</p>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <b>CheckOut</b>
                          
                            <div className="checkoutContainerMainContent-DateMain">
                                <div>
                                    <h1>26</h1>
                                </div>
                                <div>
                                    <p>July 2022</p>
                                    <p>Friday</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="checkoutChangeDate">Change</button>
                        </div>
                        
                    </div>

                    <div className="checkoutContainerMainContent-Rooms">
                        <div>
                            <h4 className="checkoutContainerMainContent-RoomsTitle">Room Details</h4>
                                <div>
                                    <h3>2 Rooms </h3>
                                    <h5>A/C Room </h5>
                                </div>
                        </div>

                        <div>
                            <button className="checkoutChangeDate">Change</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h4>Guest Details</h4>

                    <h5>Name of Guest : </h5> Nikhil 
                    <h5>Phone : </h5> +91 25332 41205 
                    <h5>E-mail : </h5> Nikhil@gmail.com
                    <hr/>
                </div>

                <div>
                    <h4>Total Price</h4>

                    <h5>Room Rent : </h5> 4300 Rs 
                    <h5>+ TAX : </h5> 300 Rs
                    <h5>+ Convinence : </h5> 120 Rs

                    <div>
                        <h2>Total : 4720 Rs</h2>
                    </div>
                    <hr/>
                </div>
            </div>

            <div>
                <div>
                    <h4>Payment Type :</h4>
                </div>

                <div className="checkoutPaymentType">
                    <div className="checkoutPaymentTypeWays">
                        <label for="html">G-Pay</label>
                        <input type="radio" id="html" name="fav_language" value="HTML" />                   
                    </div>
                    <div className="checkoutPaymentTypeWays">
                        <label for="html">UPI</label>
                        <input type="radio" id="html" name="fav_language" value="HTML" />                   
                    </div>
                    <div className="checkoutPaymentTypeWays">
                        <label for="html">Net Banking</label>
                        <input type="radio" id="html" name="fav_language" value="HTML" />                   
                    </div>
                </div>
                <hr/>
            </div>

            <div>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"> I agree to all the Terms and Conditions</label>
            </div>

            <div>
                <button onClick={completed}>Complete</button>
            </div>
 
        </div>
      );
    }
  
  