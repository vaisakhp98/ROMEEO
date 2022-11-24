import { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import { API, graphqlOperation } from 'aws-amplify'
import { UserContext } from '@lib/context/authContext';
import { listHotelBookings } from "@graphql/queries"
import ToastMessage from "@components/Toast"
import { updateHotelBooking } from '@graphql/mutations';
import { THotel, THotelBooking } from "@lib/types/hotel"



const HotelBookings = () => {

    const context = useContext(UserContext)

    const [hotels, setHotels] = useState<THotelBooking[]>([])
    useEffect(()=>{
        const fetchHotels = async () =>{
        const hotelData = await API.graphql(graphqlOperation(listHotelBookings, {
            filter: {
            userId: {eq: context.user?.sub}
            },
        })) as any

        setHotels(hotelData.data.listHotelBookings.items)
        }

        fetchHotels()
    }, [context.user])

    const handleCancel = async (e, key) => {
        e.preventDefault()

        const data={id: e.target.dataset.bookid, status: "cancelled"}
        setHotels((prevHotels: any)=>{
            let newState = prevHotels
            newState[key].status = "cancelled"
            return prevHotels
        })
        
        try{
            await API.graphql({
                query: updateHotelBooking,
                variables:{input: data},
                authMode: 'AMAZON_COGNITO_USER_POOLS',

            })


            ToastMessage("Cancelled", {type: "success"})
        }
        catch(err){
            console.log("Cancellation failed", err)
            ToastMessage("Cancellation failed", {type: "error"})
        }
    }
    return(
        <>
            <h2>Your Bookings</h2>
            <hr />
            {hotels.map((item,key)=> 
            <div key={key} className='adminNewHotelMainContainer '>
            <div className='adminNewHotelMainContent'>
                {/* <div className='adminNewHotelMainContentImage'>Image</div> */}
                  <div className='hotelAdminMainContentDetails'>
                      <div>
                          <p>Booked By :</p>
                          <h4>{item.name}</h4>
                      </div>
      
                          <div>
                              <p>Phone :</p>
                              <h4>+91 {item.phone_number}</h4>
                          </div>
  
                          <div>
                              <p>Email :</p>
                              <h4>{item.email}</h4>
                          </div>
  
                      </div>
  
                      <div className="hotelAdminNewBookingsDetails">
                          <div> Booked on : {new Date(item.createdAt).toISOString().split('T')[0]} </div>
                          <div> Rooms  : {item.rooms} </div>
                          <div> Check in : {item.checkIn} </div>
                          <div> Check out : {item.checkOut}</div>
                      </div>
  
                <div className='adminNewHotelMainContentButtons'>
                    <button data-bookid={item.id} data-itemKey={key} onClick={(e)=> handleCancel(e, key)} className="adminNewHotelMainContentButtonsOk !bg-red-500 disabled:!bg-gray-400" 
                    // disabled={item.status == "cancelled"}
                    >Cancel</button>
                    <button className="adminNewHotelMainContentButtonsApprove uppercase !bg-white !text-black"> {item.status}</button>
                </div>
  
                
            </div>
            
            <div className="px-3">
              <h4>{item.checkIn} - {item.checkOut} </h4>
            </div>
    
          </div>
        )}
        </>
        
    )
}

export default HotelBookings