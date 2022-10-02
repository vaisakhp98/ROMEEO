export const homePageMostVisitedApi = [
    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
        rating : 5,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
        rating : 5,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
        rating : 5,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },
    {
        locationName: 'Munnar',
        locationDistrict : 'idduki',
        rating : 5,
        Image : 'https://static.india.com/wp-content/uploads/2019/01/Munnar.jpg?impolicy=Medium_Resize&w=1200&h=800'
    },

]
export default function handler(req, res) {
    res.status(200).json( homePageMostVisitedApi )
  }