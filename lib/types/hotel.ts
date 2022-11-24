import {TDestination} from '@lib/types/destination'

export type THotel = {
    id?: number
    name: string
    district: string
    pincode: number
    tags: string[]
    price: number
    desciption: string
    max:number
    userId: string
    image: string[]
    location: TDestination
    rating: number
    review: THotelReview[]
    like: THotelLike[]
    bookings: THotelBooking[]
    approval: string
    reviewCount: number
}

export type THotelReview = {
    id?: number
    hotel: THotel
    title: string
    content: string
    userId: string
    image: string
}

export type THotelLike = {
    id?: number
    userId: string
    status: boolean
    hotel: THotel
}

export type THotelBooking = {
    id?: number
    userId: string
    name: string
    phone_number: string
    email: string
    rooms: number
    ac: boolean
    checkIn: string
    checkOut: string
    price: number
    tax: number
    convinenece: number
    total: number
    payment: string
    status: string
    hotel?: THotel
    hotelBookingsId: string
    createdAt?: string
}