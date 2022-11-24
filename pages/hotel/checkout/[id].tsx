
import Navigation from '@components/Navigation'
import Checkout from '@components/checkout'
import Footer from '@components/footer'
import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import {GraphQLResult } from '@aws-amplify/api';
import { getHotel } from '@graphql/queries'
import { useRouter } from 'next/router'
import { THotel } from '@lib/types/hotel'


export default function HotelCheckout() {
  const router = useRouter()
  const {id} = router.query

  const [hotel, setHotel] = useState<THotel>()
    useEffect(()=>{
      const fetchHotel = async () => {
          const hotelData = await API.graphql({
              query: getHotel,
              variables: { id: id }
          }) as GraphQLResult<any>

          await setHotel(hotelData.data.getHotel)
      }

      fetchHotel()
    }, [id])

    if(!hotel?.id) return <></>

  return (
    <div>
      <Navigation/>
      <Checkout
        hotel = {hotel}
        id={id as string}
      />
      <Footer/>
    </div>
  )
}
