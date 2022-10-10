export const hotelAdminCheckedIn = [
    {
        image : "image 1",
        userName : "Rahul Satheesh",
        location:"Kodungallr",
        phone:5236948750,
        address : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        email:"rahulsatheesh@gmail.com",
        bookedon : "15/06/2022",
        rooms:1,
        roomType:"A/C",
        cinDate:"17/06/2022",
        coutDate:"19/06/2022",
        issuedRoom : 203 
    },
    {
        image : "image 1",
        userName : "Vaisakh M V",
        location:"Kodungallr",
        phone:72300948750,
        address : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        email:"vaisakhp43@gmail.com",
        bookedon : "20/06/2022",
        rooms:2,
        roomType:"Non-A/C",
        cinDate:"21/06/2022",
        coutDate:"24/06/2022",
        issuedRoom : "400, 401"
    },
    {
        image : "image 1",
        userName : "Abhishekh Nair",
        location:"Aaratupuza",
        phone:97806948750,
        address : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        email:"abhi98@gmail.com",
        bookedon : "05/09/2022",
        rooms:3,
        roomType:"A/C",
        cinDate:"10/09/2022",
        coutDate:"19/09/2022",
        issuedRoom : "123, 154, 124"
    },
   
]
export default function handler(req, res) {
    res.status(200).json( hotelAdminCheckedIn )
  }