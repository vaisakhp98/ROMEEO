import ToastMessage from "@components/Toast"
import { createHotelBooking } from "@graphql/mutations"
import { THotel, THotelBooking } from "@lib/types/hotel"
import { API, graphqlOperation } from "aws-amplify"
import { listHotels } from "../../graphql/queries"

export const searchHotel = (searchTerm: string, options?: {district?: string}) => {
    return new Promise(async (resolve, reject) => {
        let filter = {
            name: {wildcard: `*${searchTerm}*`},
            district: {match: options.district ?? ""}
        }

        const hotels = await API.graphql(graphqlOperation(listHotels ,{
            filter: filter
        }))

        if(!hotels) return reject("No Hotels found")
        
        resolve(hotels)
    })
}


export const BookHotel = (data:{
    id: string,
    rooms: number,
    checkin: string,
    checkout: string,
    ac: boolean,
    hotel: THotel,
    payment: string,
    userId: string
    name: string
    phone_number: string
    email: string
}) => {
    const {rooms, checkin, checkout, hotel, ac, payment, id, userId, name, phone_number, email} = data
    return new Promise (async (resolve, reject) => {
        const _checkInDate = new Date(checkin);
        const _checkOutDate= new Date(checkout)
        const _today = new Date()
         // To calculate the time difference of two dates
        var _Difference_In_Time = _checkOutDate.getTime() - _checkInDate.getTime();
          
        // To calculate the no. of days between two dates
        var _Difference_In_Days = _Difference_In_Time / (1000 * 3600 * 24);

        const _ac_charge = ac ? 500 : 0
        const _price = ((hotel.price + _ac_charge) * +rooms) * (_Difference_In_Days || 1)
        const _tax = _price * 0.12
        const _convinenece = 3000
        const _total = _price + _tax + _convinenece

        // validatons
        if(!userId) return console.log("User not found");
        if(_Difference_In_Days < 0) return ToastMessage("Number of days should be positive", {type: "error"})
        if(_today > _checkInDate) return ToastMessage("CheckIn > Checkout date", {type: "error"})

        // fetch all the form data
        const data: THotelBooking = {
          userId: userId,
          name: name,
          phone_number: phone_number,
          email: email,
          rooms: +rooms,
          ac: ac ? true : false,
          checkIn: checkin,
          checkOut: checkout,
          price: _price,
          tax: _tax,
          convinenece: _convinenece,
          total: _total,
          payment: payment,
          status: 'pending',
          hotelBookingsId: id
        }

        try{
            await API.graphql({
                query: createHotelBooking,
                variables: {input: data},
            authMode: 'AMAZON_COGNITO_USER_POOLS',

            })

            resolve(true)
        }
        catch(err) {
            ToastMessage("Booking failed", {type: "error"})
            reject(false)
        }
    })
}