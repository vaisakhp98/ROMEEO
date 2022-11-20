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
          title
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
          title
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
          title
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
export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
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
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
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
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
      title
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
      title
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
      title
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
