export const homePageMostVisitedApi = [
    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
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
    res.status(200).json( homePageMostVisitedApi )
  }