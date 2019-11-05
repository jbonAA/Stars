import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state)
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            if(typeof action.errors === 'undefined'){
                nextState = []
                return nextState
            }else{
                nextState = action.errors
                return nextState
            }
        case CLEAR_ERRORS:
            nextState = []
            return nextState
        default:
            return nextState
    }
}

export default sessionErrorsReducer;



