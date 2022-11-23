
import Navigation from '@components/Navigation'
import Checkout from '@components/checkout'
import Footer from '@components/footer'
import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { getHotel } from '@graphql/queries'
import { useRouter } from 'next/router'


export default function HotelCheckout() {
  const router = useRouter()
  const {id} = router.query

  const [hotel, setHotel] = useState({})
    useEffect(()=>{
      const fetchHotel = async () => {
          const hotelData = await API.graphql({
              query: getHotel,
              variables: { id: id }
          })
          await setHotel(hotelData.data.getHotel)
      }

      fetchHotel()
    }, [id])


  return (
    <div>
      <Navigation/>
      <Checkout
        hotel = {hotel}
      />
      <Footer/>
    </div>
  )
}
