export const homePageRecommendedApi = [
    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
        rating : 5,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Kodaikanal',
        locationDistrict : 'dindigul',
        rating : 4,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Thekkady',
        locationDistrict : 'periyar',
        rating : 4,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Bekal Fort',
        locationDistrict : 'Kovalam',
        rating : 3,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },

    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
        rating : 5,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Kodaikanal',
        locationDistrict : 'dindigul',
        rating : 4,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Thekkady',
        locationDistrict : 'periyar',
        rating : 4,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Bekal Fort',
        locationDistrict : 'Kovalam',
        rating : 3,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },

]
export default function handler(req, res) {
    res.status(200).json( homePageRecommendedApi )
  }