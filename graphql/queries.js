/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      district
      pincode
      Tags
      description
      userId
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
      state {
        id
        name
        location {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      review {
        items {
          id
          content
          userId
          image
          createdAt
          updatedAt
          locationReviewId
          owner
        }
        nextToken
      }
      like {
        items {
          id
          userId
          status
          createdAt
          updatedAt
          locationLikeId
          owner
        }
        nextToken
      }
      approval
      reviewCount
      createdAt
      updatedAt
      stateLocationId
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
        pincode
        Tags
        description
        userId
        image
        rating
        hotel {
          nextToken
        }
        state {
          id
          name
          createdAt
          updatedAt
          owner
        }
        review {
          nextToken
        }
        like {
          nextToken
        }
        approval
        reviewCount
        createdAt
        updatedAt
        stateLocationId
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
        pincode
        Tags
        description
        userId
        image
        rating
        hotel {
          nextToken
        }
        state {
          id
          name
          createdAt
          updatedAt
          owner
        }
        review {
          nextToken
        }
        like {
          nextToken
        }
        approval
        reviewCount
        createdAt
        updatedAt
        stateLocationId
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
          pincode
          Tags
          description
          userId
          image
          rating
          approval
          reviewCount
          createdAt
          updatedAt
          stateLocationId
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
export const getState = /* GraphQL */ `
  query GetState($id: ID!) {
    getState(id: $id) {
      id
      name
      location {
        items {
          id
          name
          district
          pincode
          Tags
          description
          userId
          image
          rating
          approval
          reviewCount
          createdAt
          updatedAt
          stateLocationId
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
export const listStates = /* GraphQL */ `
  query ListStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location {
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
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      location {
        id
        name
        district
        pincode
        Tags
        description
        userId
        image
        rating
        hotel {
          nextToken
        }
        state {
          id
          name
          createdAt
          updatedAt
          owner
        }
        review {
          nextToken
        }
        like {
          nextToken
        }
        approval
        reviewCount
        createdAt
        updatedAt
        stateLocationId
        owner
      }
      content
      userId
      image
      createdAt
      updatedAt
      locationReviewId
      owner
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        location {
          id
          name
          district
          pincode
          Tags
          description
          userId
          image
          rating
          approval
          reviewCount
          createdAt
          updatedAt
          stateLocationId
          owner
        }
        content
        userId
        image
        createdAt
        updatedAt
        locationReviewId
        owner
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userId
      status
      location {
        id
        name
        district
        pincode
        Tags
        description
        userId
        image
        rating
        hotel {
          nextToken
        }
        state {
          id
          name
          createdAt
          updatedAt
          owner
        }
        review {
          nextToken
        }
        like {
          nextToken
        }
        approval
        reviewCount
        createdAt
        updatedAt
        stateLocationId
        owner
      }
      createdAt
      updatedAt
      locationLikeId
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        status
        location {
          id
          name
          district
          pincode
          Tags
          description
          userId
          image
          rating
          approval
          reviewCount
          createdAt
          updatedAt
          stateLocationId
          owner
        }
        createdAt
        updatedAt
        locationLikeId
        owner
      }
      nextToken
    }
  }
`;
