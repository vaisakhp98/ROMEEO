export const hotelDetailsApi = [
    {
        locationName: 'Fragrent Nature',
        locationDistrict : 'Munnar',
        rating : 5,
        description:"All Fragrant Nature Hotels have stunning locations and breathtaking views - the quintessential identity. In the travel maps and hearts of discerning travellers to the subcontinent, Fragrant Nature has set a benchmark for experiential travel. After making its presence with a standout 4 star backwater resort – a haven for Yoga & Ayurveda holidays, the group has added two more Hotels at Fort Kochi and Munnar. Vedic way of wellness in all its purity can be explored at all locations. Sourced from its own certified farms comes pesticide free, nutrient balanced food produces that at the kitchens turn to great flavours. Welcome to the world of experiential travel with Fragrant Nature.",
        image : '/fn.jpg',
        tags:[
            "Pool",
            "Hot Water",
            "Valet",
            "Parking",
            "Smoking Room"
        ]
    },

]
export default function handler(req, res) {
    res.status(200).json( hotelDetailsApi )
  }