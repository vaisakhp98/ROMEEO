export const adminNewUserApi = [
    {
        image : "image 1",
        userName : "Rahul Satheesh",
        location:"Kodungallr",
        phone:5236948750,
        address : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        email:"rahulsatheesh@gmail.com"
    },
    {
        image : "image 1",
        userName : "Vaisakh M V",
        location:"Kodungallr",
        phone:72300948750,
        address : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        email:"vaisakhp43@gmail.com"
    },
    {
        image : "image 1",
        userName : "Abhishekh Nair",
        location:"Aaratupuza",
        phone:97806948750,
        address : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        email:"abhi98@gmail.com"
    },
   
]
export default function handler(req, res) {
    res.status(200).json( adminNewUserApi )
  }