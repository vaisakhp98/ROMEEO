export const hotelReviewsApi = [
    {
        image : "image 1",
        reviewHeading : "Amazing Spot",
        rating: 5,
        review: "The spot is very beautiful and i would like everyone to try this spot THIS WAS an absolute joy, must go with friends and family"
    },
    {
        image : "image 2",
        reviewHeading : "Amazing Spot",
        rating: 5,
        review: "The spot is very beautiful and i would like everyone to try this spot THIS WAS an absolute joy, must go with friends and family"
    },
    {
        image : "image 3",
        reviewHeading : "Geourgeous Spot",
        rating: 4,
        review: "The spot is very beautiful and i would like everyone to try this spot THIS WAS an absolute joy, must go with friends and family"
    },
    {
        image : "image 4",
        reviewHeading : "Was not as expected",
        rating: 2,
        review: "The spot is very beautiful and i would like everyone to try this spot THIS WAS an absolute joy, must go with friends and family"
    },
    {
        image : "image 5",
        reviewHeading : "Amazing Spot",
        rating: 5,
        review: "The spot is very beautiful and i would like everyone to try this spot THIS WAS an absolute joy, must go with friends and family"
    },

]
export default function handler(req, res) {
    res.status(200).json( hotelReviewsApi )
  }