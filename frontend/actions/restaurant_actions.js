import * as APIUtil from '../util/restaurant_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

export const fetchRestaurants = restaurants => dispatch => (
    APIUtil.fetchRestaurants(restaurants).then(restaurants => (
        dispatch(receiveRestaurants(restaurants))
    ))
);

export const fetchBench = id => dispatch => (
    APIUtil.fetchBench(id).then(payload => (
        dispatch(receiveRestaurant(payload))
    ))
);