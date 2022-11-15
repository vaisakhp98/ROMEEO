/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createHotel = /* GraphQL */ `
  mutation CreateHotel(
    $input: CreateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    createHotel(input: $input, condition: $condition) {
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
export const updateHotel = /* GraphQL */ `
  mutation UpdateHotel(
    $input: UpdateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    updateHotel(input: $input, condition: $condition) {
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
export const deleteHotel = /* GraphQL */ `
  mutation DeleteHotel(
    $input: DeleteHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    deleteHotel(input: $input, condition: $condition) {
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
