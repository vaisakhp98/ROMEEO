/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
export const onCreateHotel = /* GraphQL */ `
  subscription OnCreateHotel(
    $filter: ModelSubscriptionHotelFilterInput
    $owner: String
  ) {
    onCreateHotel(filter: $filter, owner: $owner) {
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
export const onUpdateHotel = /* GraphQL */ `
  subscription OnUpdateHotel(
    $filter: ModelSubscriptionHotelFilterInput
    $owner: String
  ) {
    onUpdateHotel(filter: $filter, owner: $owner) {
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
export const onDeleteHotel = /* GraphQL */ `
  subscription OnDeleteHotel(
    $filter: ModelSubscriptionHotelFilterInput
    $owner: String
  ) {
    onDeleteHotel(filter: $filter, owner: $owner) {
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
