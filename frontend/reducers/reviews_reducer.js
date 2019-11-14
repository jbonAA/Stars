import {
    RECEIVE_REVIEW,
    DELETE_REVIEW,
    RECEIVE_RESTAURANT
} from '../actions/restaurant_actions'

const reviewsReducer = ( state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, action.reviews)
        case RECEIVE_REVIEW:
            const { review } = action;
            return Object.assign({}, state, { [review.id]: review })
        case DELETE_REVIEW:
            const nextState = Object.assign({}, { [action.review.review.id]: review })
            delete nextState[action.review.id]
            return nextState
        default:
            return state;
    }
}

export default reviewsReducer