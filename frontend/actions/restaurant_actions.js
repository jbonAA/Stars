import * as APIUtil from '../util/restaurant_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIEW"

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const receiveRestaurant = ({restaurant, reviews}) => ({
    type: RECEIVE_RESTAURANT,
    restaurant,
    reviews
})

export const receiveReview = ({ review }) => ({
    type: RECEIVE_REVIEW,
    review
})

export const removeReview = review  => ({
    type: DELETE_REVIEW,
    review
})

export const fetchRestaurants = () => dispatch => (
    APIUtil.fetchRestaurants().then(restaurants => (
        dispatch(receiveRestaurants(restaurants))
    ))
);

export const fetchRestaurant = id => dispatch => {
    
    return (
    APIUtil.fetchRestaurant(id).then(payload => (
        dispatch(receiveRestaurant(payload))
        ))
    );
}

export const createReview = review => dispatch => {
    
    return(
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    )))
}

export const deleteReview = id => dispatch => {
    
    return(
        APIUtil.deleteReview(id).then(payload => (
            dispatch(removeReview(payload))
        ))
    )
}