import { combineReducers } from 'redux'
import { ADD_MESSAGE } from './action'

function messages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                action.text,
            ]
        default:
            return state
    }
}

const messageApp = combineReducers({
    messages
})

export default messageApp