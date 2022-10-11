export const destinationDetailsApi = 
    {
        locationName: 'Neliyampathy',
        locationDistrict : 'Kovalam',
        rating : 3,
        description:"Munnar is situated at the confluence of three mountain streams - Muthirapuzha, Nallathanni and Kundala – and the word 'Munnar' means three rivers in Malayalam. Situated about 1600m above sea level, the hill station had been the summer resort of the British Government during the colonial era.",
        image : [
                    '/nelliyampathy.jpg',
                    '/nelliyampathy.jpg',
                    '/nelliyampathy.jpg',
                ],
        tags:[
            "Romantic",
            "Adventure",
            "Family"
        ]
    }


export default function handler(req, res) {
    res.status(200).json( destinationDetailsApi )
  }