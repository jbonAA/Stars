import {
    RECEIVE_RESTAURANTS,
    RECEIVE_RESTAURANT
} from '../actions/restaurant_actions';

const restaurantReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            const rest = { [action.restaurant.id]: action.restaurant}
            return Object.assign({}, state, rest)
        default:
            return state
    }
}

export default restaurantReducer