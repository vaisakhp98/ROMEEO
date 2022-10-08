export const homePageRecommendedApi = [
    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
        description: " Munnar is situated at the confluence of three mountain streams - Muthirapuzha, Nallathanni and Kundala – and the word 'Munnar' means three rivers in Malayalam. Situated about 1600m above sea level, the hill station had been the summer resort of the British Government during the colonial era.",
        rating : 5,
        image : '/munnar.jpg'
    },
    {
        locationName: 'Kodaikanal',
        locationDistrict : 'dindigul',
        rating : 4,
        image : '/kodaikanal.jpg'
    },
    {
        locationName: 'Thekkady',
        locationDistrict : 'periyar',
        rating : 4,
        image : '/thekady.jpg'
    },
    {
        locationName: 'Bekal Fort',
        locationDistrict : 'Kovalam',
        rating : 3,
        image : '/bekal.jpg'
    },

    {
        locationName: 'Vagamon',
        locationDistrict : 'idduki',
        rating : 5,
        image : '/vagamon.jpg'
    },
    {
        locationName: 'Athirapilly',
        locationDistrict : 'dindigul',
        rating : 4,
        image : '/athirapilly.jpg'
    },
    {
        locationName: 'Allapuza',
        locationDistrict : 'periyar',
        rating : 4,
        image : '/alleppey.jpg'
    },
    {
        locationName: 'Neliyampathy',
        locationDistrict : 'Kovalam',
        rating : 3,
        image : '/nelliyampathy.jpg'
    },

]
export default function handler(req, res) {
    res.status(200).json( homePageRecommendedApi )
  }