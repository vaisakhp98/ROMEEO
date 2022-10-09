export const hotelListApi = [
    {
        hotelName: 'Fragrent Nature',
        hotelLocation : 'Munnar',
        rating : 5,
        image : '/fn.jpg'
    },
    {
        hotelName: 'Green Home',
        hotelLocation : 'Munnar',
        rating : 4,
        image : '/greenHome.jpg'
    },
    {
        hotelName: 'Luxor Int',
        hotelLocation : 'Munnar',
        rating : 4,
        image : '/luxor.jpg'
    },
    {
        hotelName: 'Meridian',
        hotelLocation : 'Munnar',
        rating : 3,
        image : '/meridian.jpg'
    },

    {
        hotelName: 'Terra',
        hotelLocation : 'Munnar',
        rating : 5,
        image : '/terra.jpg'
    },
    {
        hotelName: 'Athirapilly',
        hotelLocation : 'dindigul',
        rating : 4,
        image : '/athirapilly.jpg'
    },
    {
        hotelName: 'Allapuza',
        hotelLocation : 'periyar',
        rating : 4,
        image : '/alleppey.jpg'
    },
    {
        hotelName: 'Neliyampathy',
        hotelLocation : 'Kovalam',
        rating : 3,
        image : '/nelliyampathy.jpg'
    },

]
export default function handler(req, res) {
    res.status(200).json( hotelListApi )
  }