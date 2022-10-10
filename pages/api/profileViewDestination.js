export const profileViewDestinationApi = [
    {
        locationName: 'Allapuza',
        locationDistrict : 'periyar',
        locationDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        locationTags:'Sight Seeing',
        rating : 4,
        image : '/alleppey.jpg'
    },
    {
        locationName: 'Wayanad',
        locationDistrict : 'Wayanaad',
        locationDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        locationTags:'Adventure',
        rating : 4,
        image : '/alleppey.jpg'
    },

]
export default function handler(req, res) {
    res.status(200).json( profileViewDestinationApi )
  }