export const hotelReviewsApi = [
    {
        image : "image 1",
        hotelName : "Meredian Residence",
        location:"Munnar",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        totalRooms : 48,
        typeofRooms : "A/C and Non-A/C",
        postedBy:"Meredian Hotel"
    },
    {
        image : "image 2",
        hotelName : "Green Valley",
        location:"Munnar",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        totalRooms : 88,
        typeofRooms : "A/C and Non-A/C",
        postedBy:"Green Valley Resort"
    },
    {
        image : "image 3",
        hotelName : "Sky Fall",
        location:"Munnar",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        totalRooms : 24,
        typeofRooms : "A/C and Non-A/C",
        postedBy:"SkyFall Hills"
    },
   
]
export default function handler(req, res) {
    res.status(200).json( hotelReviewsApi )
  }