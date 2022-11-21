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
          pincode
          tags
          price
          desciption
          max
          userId
          image
          rating
          approval
          reviewCount
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
          pincode
          tags
          price
          desciption
          max
          userId
          image
          rating
          approval
          reviewCount
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
          pincode
          tags
          price
          desciption
          max
          userId
          image
          rating
          approval
          reviewCount
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
export const onCreateHotel = /* GraphQL */ `
  subscription OnCreateHotel(
    $filter: ModelSubscriptionHotelFilterInput
    $owner: String
  ) {
    onCreateHotel(filter: $filter, owner: $owner) {
      id
      name
      district
      pincode
      tags
      price
      desciption
      max
      userId
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
      review {
        items {
          id
          title
          content
          userId
          image
          createdAt
          updatedAt
          hotelReviewId
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
          hotelLikeId
          owner
        }
        nextToken
      }
      approval
      reviewCount
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
      pincode
      tags
      price
      desciption
      max
      userId
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
      review {
        items {
          id
          title
          content
          userId
          image
          createdAt
          updatedAt
          hotelReviewId
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
          hotelLikeId
          owner
        }
        nextToken
      }
      approval
      reviewCount
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
      pincode
      tags
      price
      desciption
      max
      userId
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
      review {
        items {
          id
          title
          content
          userId
          image
          createdAt
          updatedAt
          hotelReviewId
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
          hotelLikeId
          owner
        }
        nextToken
      }
      approval
      reviewCount
      createdAt
      updatedAt
      locationHotelId
      owner
    }
  }
`;
export const onCreateState = /* GraphQL */ `
  subscription OnCreateState(
    $filter: ModelSubscriptionStateFilterInput
    $owner: String
  ) {
    onCreateState(filter: $filter, owner: $owner) {
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
export const onUpdateState = /* GraphQL */ `
  subscription OnUpdateState(
    $filter: ModelSubscriptionStateFilterInput
    $owner: String
  ) {
    onUpdateState(filter: $filter, owner: $owner) {
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
export const onDeleteState = /* GraphQL */ `
  subscription OnDeleteState(
    $filter: ModelSubscriptionStateFilterInput
    $owner: String
  ) {
    onDeleteState(filter: $filter, owner: $owner) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onCreateReview(filter: $filter, owner: $owner) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onUpdateReview(filter: $filter, owner: $owner) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onDeleteReview(filter: $filter, owner: $owner) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onCreateLike(filter: $filter, owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onUpdateLike(filter: $filter, owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onDeleteLike(filter: $filter, owner: $owner) {
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
export const onCreateHotelReview = /* GraphQL */ `
  subscription OnCreateHotelReview(
    $filter: ModelSubscriptionHotelReviewFilterInput
    $owner: String
  ) {
    onCreateHotelReview(filter: $filter, owner: $owner) {
      id
      hotel {
        id
        name
        district
        pincode
        tags
        price
        desciption
        max
        userId
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
        locationHotelId
        owner
      }
      title
      content
      userId
      image
      createdAt
      updatedAt
      hotelReviewId
      owner
    }
  }
`;
export const onUpdateHotelReview = /* GraphQL */ `
  subscription OnUpdateHotelReview(
    $filter: ModelSubscriptionHotelReviewFilterInput
    $owner: String
  ) {
    onUpdateHotelReview(filter: $filter, owner: $owner) {
      id
      hotel {
        id
        name
        district
        pincode
        tags
        price
        desciption
        max
        userId
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
        locationHotelId
        owner
      }
      title
      content
      userId
      image
      createdAt
      updatedAt
      hotelReviewId
      owner
    }
  }
`;
export const onDeleteHotelReview = /* GraphQL */ `
  subscription OnDeleteHotelReview(
    $filter: ModelSubscriptionHotelReviewFilterInput
    $owner: String
  ) {
    onDeleteHotelReview(filter: $filter, owner: $owner) {
      id
      hotel {
        id
        name
        district
        pincode
        tags
        price
        desciption
        max
        userId
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
        locationHotelId
        owner
      }
      title
      content
      userId
      image
      createdAt
      updatedAt
      hotelReviewId
      owner
    }
  }
`;
export const onCreateHotelLike = /* GraphQL */ `
  subscription OnCreateHotelLike(
    $filter: ModelSubscriptionHotelLikeFilterInput
    $owner: String
  ) {
    onCreateHotelLike(filter: $filter, owner: $owner) {
      id
      userId
      status
      hotel {
        id
        name
        district
        pincode
        tags
        price
        desciption
        max
        userId
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
        locationHotelId
        owner
      }
      createdAt
      updatedAt
      hotelLikeId
      owner
    }
  }
`;
export const onUpdateHotelLike = /* GraphQL */ `
  subscription OnUpdateHotelLike(
    $filter: ModelSubscriptionHotelLikeFilterInput
    $owner: String
  ) {
    onUpdateHotelLike(filter: $filter, owner: $owner) {
      id
      userId
      status
      hotel {
        id
        name
        district
        pincode
        tags
        price
        desciption
        max
        userId
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
        locationHotelId
        owner
      }
      createdAt
      updatedAt
      hotelLikeId
      owner
    }
  }
`;
export const onDeleteHotelLike = /* GraphQL */ `
  subscription OnDeleteHotelLike(
    $filter: ModelSubscriptionHotelLikeFilterInput
    $owner: String
  ) {
    onDeleteHotelLike(filter: $filter, owner: $owner) {
      id
      userId
      status
      hotel {
        id
        name
        district
        pincode
        tags
        price
        desciption
        max
        userId
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
        locationHotelId
        owner
      }
      createdAt
      updatedAt
      hotelLikeId
      owner
    }
  }
`;
