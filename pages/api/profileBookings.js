export const profileBookingsApi = [
    {
        hotelName: 'Fragrent Nature',
        hotelLocation : 'Munnar',
        rating : 5,
        image : '/fn.jpg',
        cindate : "10/06/2022",
        coutdate : "13/06/2022",
        noOfRooms: 2,
        typeofRoom : "A/C"
    },
    {
        hotelName: 'Green Home',
        hotelLocation : 'Munnar',
        rating : 4,
        image : '/greenHome.jpg',
        cindate : "19/07/2022",
        coutdate : "24/07/2022",
        noOfRooms: 2,
        typeofRoom : "Non - A/C"
    },
    {
        hotelName: 'Luxor Int',
        hotelLocation : 'Munnar',
        rating : 4,
        image : '/luxor.jpg',
        cindate : "15/11/2022",
        coutdate : "18/11/2022",
        noOfRooms: 2,
        typeofRoom : "A/C"
    },
    


]
export default function handler(req, res) {
    res.status(200).json( profileBookingsApi )
  }