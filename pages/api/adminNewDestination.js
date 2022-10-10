export const adminNewDestinationApi = [
    {
        image : "image 1",
        locationName : "Ravindra Hill",
        locationDistrict:"Munnar",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        tags:"Adventure",
        postedBy:"Ravindran Panicker"
    },
    {
        image : "image 2",
        locationName : "Mahesh Falls",
        locationDistrict:"Kakanad",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        tags:"Family",
        postedBy:"Mahesh PP"
    },
    {
        image : "image 3",
        locationName : "Fredric Falls",
        locationDistrict:"Vytilla",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        tags:"Adventure",
        postedBy:"Francis"
    },
   
]
export default function handler(req, res) {
    res.status(200).json( adminNewDestinationApi )
  }