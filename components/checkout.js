import { ImLocation } from "react-icons/im";
import { FcSimCardChip } from "react-icons/fc";
import { AiTwotoneBank } from "react-icons/ai";
import { FaGooglePay } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { loadImage } from "@lib/image";
import { UserContext } from '@lib/context/authContext';

/**
 * 
 * @param {*} props
 * @param {object} hotel 
 * @returns 
 */
export default function Checkout(props) {
    const context = useContext(UserContext)
    const {hotel } = props

    const [rooms, setRooms] = useState(1)
    const [ac, setAc] = useState(true)
    const [checkin, setCheckIn] = useState()
    const [checkout, setCheckout] = useState()

    useEffect(() => {
        const current = new Date().toISOString().split("T")[0];
        setCheckIn(current) 
        setCheckout(current) 
    }, [])

    const [image, setImage] = useState()  
    useEffect(()=>{
        const fetchImage = async () => {
            if(!hotel.image) return
            const url = await loadImage(hotel.image[0])
            setImage(url)
        }

        fetchImage()
    },[hotel])

    const handleSubmit = (e) => {
        e.preventDefault()


    } 
    
    if(!hotel) return<>No Hotel found</>

    const ac_charge = ac=="true" ? 500 : 0
    const price = (hotel.price + ac_charge) * rooms
    const tax = price * 0.12
    const convinenece = 3000
    const total = price + tax + convinenece
    const checkInDate = new Date(checkin);
    const checkOutDate= new Date(checkout)

      return (
        <div className="checkoutSection" style={{fontFamily:'rubik',fontWeight:300}}>
                <form className="checkoutContainer" onSubmit={handleSubmit}>
                <div className="checkoutContainerImage">
                    <img className="checkoutContainerImageImage" src={image} alt="Hotel Image" width="800" height="200"/>
                </div>
                

                <div className="checkoutContainerHotelName">
                <h4 className="text-xl font-bold"> Hotel Name :</h4>
                    
                    <h2 className="text-lg"><b>{hotel.name}</b></h2>
                    <div > 
                    <b className="flex items-center text-gray-500"><ImLocation/>{hotel.district}</b>
                    </div>
                    
                    <hr/>
                </div>

                <div className="checkoutContainerDateandTimeSection">
                    <div className="checkoutContainerDateandTime">
                        
                        <div>
                            <h4 className="text-gray-500">Check-In : </h4>
                            <h1 className="text-3xl">{checkInDate.toLocaleString('default', { day: 'numeric' })}</h1>
                            <h4>{checkInDate.toLocaleString('default', { weekday: 'long' })}</h4>
                            <p>{checkInDate.toLocaleString('default', { month: 'long' })} {checkInDate.toLocaleString('default', { year: 'numeric' })} </p>
                            
                            <input value={checkin} onChange={(e) => setCheckIn(e.target.value)} type="date" id="birthday" name="birthday" className="datePicker border"/>

                            
                        </div>
                    
                        
                        
                    </div>

                    <div className="checkoutContainerDateandTime-checkOut">
                        
                    <div>
                    <h4 className="text-gray-500">Check-In : </h4>
                            <h1 className="text-3xl">{checkOutDate.toLocaleString('default', { day: 'numeric' })}</h1>
                            <h4>{checkOutDate.toLocaleString('default', { weekday: 'long' })}</h4>
                            <p>{checkOutDate.toLocaleString('default', { month: 'long' })} {checkOutDate.toLocaleString('default', { year: 'numeric' })} </p>
                            <input value={checkout} onChange={(e) => setCheckout(e.target.value)} type="date" id="birthday" name="birthday" className="datePicker border"/>
                        
                        </div>
                        
                    </div>
                    
                </div>

                <div className="roomDetails">
                    <hr/>
                    <h4 className="text-xl"> Room Details :</h4>
                
                    
                        <label htmlFor="cars" className="text-gray-500">Choose Number of Rooms:</label>
                        <br/>
                        <select value={rooms} onChange={(e) => setRooms(e.target.value)} className="p-3 border m-2" name="cars" id="cars">
                            <option value={1}>1 Room</option>
                            <option value={2}>2 Rooms</option>
                            <option value={3}>3 Rooms</option>
                            <option value={4}>4 Rooms</option>
                        </select>
                        <br/>
                        

                    
                    <h5 className="text-l text-gray-500">Choose type of Room:</h5>
                        <br/>
                        <select value={ac} onChange={(e) => setAc(e.target.value)} className="p-3 border ml-2 -mt-3" name="cars" id="cars">
                            <option value={true}>A/C</option>
                            <option value={false}>Non-A/C</option>
                            
                        </select>
                        <br/>

                    
                </div>

                <div className="guestDetails">
                    <hr/>
                    <h4 className="text-xl"> Guest Details :</h4>
                    <h4 className="text-l text-gray-500">Name of Guest :</h4>
                    <p className="p-3">{context.user?.name}</p>

                    <h4 className="text-l text-gray-500">Phone:</h4>
                    <p className="p-3">{context.user?.phone_number}</p>

                    <h4 className="text-l text-gray-500">E-mail :</h4>
                    <p className="p-3">{context.user?.email}</p>
                </div>

                <div className="cashDetails">
                    <hr/>
                    <h4 className="text-xl">Room Price :</h4>
                    <p>{price} Rs/-</p>

                    <h4 className="text-xl mt-2">+TAX :</h4>
                    <p>{tax} Rs/-</p>

                    <h4 className="text-xl mt-2 " >+Convinenece :</h4>
                    <p>{convinenece} Rs/-</p>
                    <hr/>
                    <h2 className="text-2xl mt-2 mb-2 font-bold"  >Total Payment - {total} Rs /-</h2>
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
                            <input type="checkbox" id="html" name="terms" value="terms"/>
                            <label> : I agree to all Terms and Conditions </label>
                            
                    </div>
                    <div className="payNowButtonDiv">
                        <button type="submit" className="payNowButton">Pay Now</button>
                    </div>
                </div>
            </form>      
        </div>
        
      );
    }
  
  