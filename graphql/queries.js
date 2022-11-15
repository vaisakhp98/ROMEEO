/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      district
      state
      pincode
      Tags
      description
      image
      rating
      hotel {
        items {
          id
          name
          district
          price
          desciption
          max
          image
          rating
          createdAt
          updatedAt
          locationHotelId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        district
        state
        pincode
        Tags
        description
        image
        rating
        hotel {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getHotel = /* GraphQL */ `
  query GetHotel($id: ID!) {
    getHotel(id: $id) {
      id
      name
      district
      price
      desciption
      max
      image
      location {
        id
        name
        district
        state
        pincode
        Tags
        description
        image
        rating
        hotel {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      rating
      createdAt
      updatedAt
      locationHotelId
      owner
    }
  }
`;
export const listHotels = /* GraphQL */ `
  query ListHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        district
        price
        desciption
        max
        image
        location {
          id
          name
          district
          state
          pincode
          Tags
          description
          image
          rating
          createdAt
          updatedAt
          owner
        }
        rating
        createdAt
        updatedAt
        locationHotelId
        owner
      }
      nextToken
    }
  }
`;
