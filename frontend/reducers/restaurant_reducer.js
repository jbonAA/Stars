import {
    RECEIVE_RESTAURANTS,
    RECEIVE_RESTAURANT,
    RECEIVE_REVIEW,
} from '../actions/restaurant_actions';

const restaurantReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:

            return Object.assign({}, state, action.restaurant)
        case RECEIVE_REVIEW:
            
            const { review } = action
            const nextState = Object.assign({}, state);
            nextState[action.review.restaurant_id]
            return nextState
        default:
            return state
    }
}

export default restaurantReducer